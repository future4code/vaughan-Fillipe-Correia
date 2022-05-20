import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CircularProgress from "@material-ui/core/CircularProgress";
import PatientInfoModal from "./PatientInfoModal";

const columns = [
  { id: "name", label: "Name" },
  { id: "gender", label: "Gender" },
  { id: "birth", label: "Birth" },
  { id: "actions", label: "Actions" },
];

export default function PatientsTable({
  patients,
  renderedPatients,
  setScrollCount,
}) {
  const [patientInfoModal, setPatientInfoModal] = useState({
    isOpen: false,
    patient: null,
  });
  const [patientsAreFiltered, setPatientsAreFiltered] = useState(false);

  useEffect(() => {
    setPatientsAreFiltered(patients.length > renderedPatients.length);
  }, [patients, renderedPatients]);

  const renderTimestamp = (timestamp) => {
    const ts = new Date(timestamp);
    const day = ts.getDate() >= 10 ? ts.getDate() : `0${ts.getDate()}`;
    const month =
      ts.getMonth() + 1 >= 10 ? ts.getMonth() + 1 : `0${ts.getMonth() + 1}`;
    return `${day}/${month}/${ts.getFullYear()}`;
  };

  const handleScroll = (e) => {
    if (patientsAreFiltered) return;

    const el = e.target;
    if (Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight) {
      setScrollCount((scrollCount) => scrollCount + 1);
    }
  };

  return (
    <>
      <Paper className="shadow-lg">
        <TableContainer className="max-h-96" onScroll={handleScroll}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="left"
                    style={{ minWidth: column.minWidth }}
                  >
                    <h5>{column.label}</h5>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {renderedPatients.map((patient, i) => {
                const row = {
                  name: `${patient.name.first} ${patient.name.last}`,
                  gender: patient.gender,
                  birth: renderTimestamp(patient.dob.date),
                  actions: (
                    <button
                      className="btn-primary"
                      onClick={() =>
                        setPatientInfoModal({
                          isOpen: true,
                          patient: patient,
                        })
                      }
                    >
                      View
                    </button>
                  ),
                };
                return (
                  <TableRow hover key={i}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="left">
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {!patientsAreFiltered && (
            <div className="w-full flex justify-center p-4">
              <CircularProgress size={30} />
            </div>
          )}
        </TableContainer>
      </Paper>
      <PatientInfoModal
        isOpen={patientInfoModal.isOpen}
        closeModal={() =>
          setPatientInfoModal({
            ...patientInfoModal,
            isOpen: false,
          })
        }
        patient={patientInfoModal.patient}
        renderTimestamp={renderTimestamp}
      />
    </>
  );
}
