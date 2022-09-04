export const getSelectedChildLabReports = (state) => state.selectedChildHealthFiles.labReports;
export const getSelectedChildPrescriptions = (state) => state.selectedChildHealthFiles.prescriptions;
export const selectEmailSendingStatus = (state) => state.selectedChildHealthFiles.emailHealthFileStatus;
export const selectEmailSendingError = (state) => state.selectedChildHealthFiles.emailHealthFileError;
export const selectDeletingStatus = (state) => state.selectedChildHealthFiles.deleteLabReportStatus;
export const selectDeletingError = (state) => state.selectedChildHealthFiles.deleteLabReportError;
export const selectAddingStatus = (state) => state.selectedChildHealthFiles.addHealthFileStatus;
export const selectAddingError = (state) => state.selectedChildHealthFiles.addHealthFileError;
export const getLoggedInUserId = (state) => state.user.user.personId;