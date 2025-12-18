import React, { useState } from "react";
import ReportedLessonsTable from "../ReportedLessonsTable/ReportedLessonsTable";
import ReportModal from "../ReportModal/ReportModal";

const ReportedLessons = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal  = () => setOpenModal(true)
  const  handleCloseModal  = () => setOpenModal(false)

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-6">Reported Lessons</h1>
      {/* Table receives openModal as prop */}
      <ReportedLessonsTable handleOpenModal={handleOpenModal}/>
      {/* Modal */}
      {openModal && <ReportModal handleCloseModal={handleCloseModal}/>}
    </div>
  );
};

export default ReportedLessons;
