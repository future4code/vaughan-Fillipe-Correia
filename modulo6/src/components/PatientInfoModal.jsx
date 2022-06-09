import React, { useMemo } from "react";
import Image from "next/image";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

export default function PatientInfoModal({
  isOpen,
  closeModal,
  patient,
  renderTimestamp,
}) {
  
  const patientId = useMemo(
    () =>
      patient &&
      patient.location.postcode + patient.location.coordinates.latitude,
    [patient]
  );

  return (
    <Modal
      className="flex justify-center items-center"
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <>
          {patient !== null && (
            <div className="w-96 bg-light rounded-md">
              <div className="w-full flex flex-col justify-center items-center p-4 b-bottom-2px-bg-dark">
                <Image
                  src={patient.picture.medium}
                  className="rounded-full b-2px-headline"
                  width={96}
                  height={96}
                  alt="patient-photo"
                />
                <h2>
                  {patient.name.first} {patient.name.last}
                </h2>
              </div>
              <div className="w-full p-4">
                <ul className="w-full">
                  <li>
                    <span>
                      Email: <strong>{patient.email}</strong>
                    </span>
                  </li>
                  <li>
                    <span>
                      Gender: <strong>{patient.gender}</strong>
                    </span>
                  </li>
                  <li>
                    <span>
                      Birth date:{" "}
                      <strong>{renderTimestamp(patient.dob.date)}</strong>
                    </span>
                  </li>
                  <li>
                    <span>
                      Phone: <strong>{patient.phone}</strong>
                    </span>
                  </li>
                  <li>
                    <span>
                      Nationality: <strong>{patient.nat}</strong>
                    </span>
                  </li>
                  <li>
                    <span>
                      Address:{" "}
                      <strong>
                        {patient.location.street.number}{" "}
                        {patient.location.street.name}, {patient.location.city}
                      </strong>
                    </span>
                  </li>
                  <li>
                    <span>
                      ID: <strong>{patientId}</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </>
      </Fade>
    </Modal>
  );
}
