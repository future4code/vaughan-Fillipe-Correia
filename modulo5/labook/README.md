# Labook ![globe_with_meridians](https://github.githubassets.com/images/icons/emoji/unicode/1f310.png) ![speech_balloon](https://github.githubassets.com/images/icons/emoji/unicode/1f4ac.png)

![logo projeto](https://i.ibb.co/CWSWPbC/Screenshot-from-2022-04-24-17-37-22.png)



The backend of a social network.

LaBook is a back-end development of an imaginary social  network. It is an activity result of Labenu's full-stack development  course. This back-end consists of an API constructed with Typescript and MySQL  languages, using NodeJS as development environment, Express as NodeJS  framework for API construction and communicating with Database through  Knex's query builder.

#### POSTMAN DOCUMENTATION: https://documenter.getpostman.com/view/19297915/UyxdL9TV



**The back-end performs the following functions:**

![small_orange_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f538.png) SignUp and Login of users through token authentication (both access and refresh token);

![small_orange_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f538.png) unilateral friendship interaction;

![small_orange_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f538.png) feed requisition returning only friends posts or posts filtered by posts types;

![small_orange_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f538.png) feed pagination;

![small_orange_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f538.png) posting of texts and url based pictures requisition;

![small_orange_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f538.png) comment requisition;

## Tools and technologies ![wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f527.png)

![small_orange_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f538.png) Typescript

![small_orange_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f538.png)NodeJs

![small_orange_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f538.png) Express

![small_orange_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f538.png) MySql

## Running the app ![runner](https://github.githubassets.com/images/icons/emoji/unicode/1f3c3.png)



```
npm install
```

Execute the application in development mode:

```
npm run dev 
```

## 

## Code architecture ![computer](https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png)

This code was designed concerned with clean code, TS best  practices and Model-View-Controller (MVC) design pattern. The source  folder is devided in:

![small_blue_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f539.png) **controller layer**: folder containing Typescript files responsible for receiving requisitions data and directing them to the necessary layers;

![small_blue_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f539.png) **business layer**: folder containing Typescript files responsible for validations and the communication with the data layer;

![small_blue_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f539.png) **data layer**: folder containing Typescript files responsible for communicating with the Database through queries;

![small_blue_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f539.png) **model layer**: folder containing interfaces for a better and more secure data processing;

![small_blue_diamond](https://github.githubassets.com/images/icons/emoji/unicode/1f539.png) **services layer**: folder containing data processing (token generator, id generator and so on);

## 🤝 Colaborators

```
People who built and maintain the project:
```

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/FillipeCO">
        <img src="https://avatars.githubusercontent.com/u/87552890?v=4" width="100px;" alt="Foto do Fillipe no GitHub"/><br>
        <sub>
          <b>Fillipe Dias</b>
        </sub>
      </a>
    </td>
     </tr>
</table>
