import express, { Request, Response } from 'express';
import cors from 'cors';
import connection from './connection';
import { AddressInfo } from 'net';


const app = express();
app.use(express.json());
app.use(cors());

// app.get("/actor", async(req: Request, res: Response): Promise<void> => {
//     try {
//         const result = await connection.raw(`
//             SELECT * FROM Actor;
//             `)
//         res.status(200).send(result[0])
//     } catch(err:any){
//         res.status(500).send(err.sqlMesssage || err.Message)
//     }
// })


app.post("/actor", async(req: Request, res: Response): Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO Actor (id, name, salary, birth_date, gender)
            VALUES(
                ${Date.now().toString()},
                "${req.body.name}",
                ${req.body.salary},
                "${req.body.birth_date}",
                "${req.body.gender}"
                );
                `)
                res.status(201).send("Ator criado com sucesso!")
            } catch(err:any){
                res.status(500).send(err.sqlMesssage || err.Message)
            }
        })


        const getActorById = async (id: string): Promise<any> => {
            console.log(id)
            const result = await connection.raw(`
              SELECT * FROM Actor WHERE id = '${id}'
            `)
                console.log(result)
              return result[0][0]
          }


          app.get("/actor/:id", async (req: Request, res: Response) => {
            try {
              const id = req.params.id
          
              
                console.log(id)
              res.send(await getActorById(id))
            } catch (error) {
                  console.log(error.message)
              res.status(500).send("Unexpected error")
            }
          })




    const getActorByName = async (name: string): Promise<any> => {
        
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = '${name}';
        `);
        
        return result[0][0]
    }

    app.get("/actor/names/:name", async (req: Request, res: Response) => {
        try {
            const name = req.params.name
            
            res.send(await getActorByName(name))
        } catch (error) {
            console.log(error.message)
            res.status(500).send("Unexpected error")
        }
    })

// const countActorsByGender = async (gender: string): Promise<any> => {
//     const result = await connection.raw(`
//     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//     `)

//     return result[0][0]
// }

// app.get("/actor/genders/:gender", async (req: Request, res: Response) => {
//     try {
//         const gender = req.params.gender

//         res.send(await countActorsByGender(gender))
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })


const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

//   queryBuilder functions:

const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

  const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 

  const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };

app.delete("/actor/:id", async (req:Request, res:Response): Promise<void> => {
    try{
        await deleteActor(req.params.id);

        res.send("Ator deletado com sucesso!")
    } catch(err:any){
        res.status(500).send(err.sqlMesssage || err.Message)
    }
})

app.put("/actor/:id", async (req:Request, res:Response): Promise<void> => {
    try {
        await connection("Actor")
        .update({
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birth_date,
            gender: req.body.gender
        }).where({id: req.params.id})

        res.status(200).send({id: req.params.id})

    } catch (error:any) {
        
        res.status(500).send(error.sqlMesssage || error.Message)
    }
})

const countActorsByGender = async (gender: string): Promise<any> =>{
    const result = await connection.raw(`
         SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
         `)
         return result[0][0]
}

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const count = await countActorsByGender(req.query.gender as string);
        console.log(count)
        res.status(200).send({quantity: count,});

       
    } catch (error:any) {
        
        res.status(500).send(error.sqlMesssage || error.Message)
    }
})





app.listen(process.env.PORT || 3003, () => {
 if (process.env.NODE_ENV !== 'test') {
 console.log('Server started on port 3003!');
}
});