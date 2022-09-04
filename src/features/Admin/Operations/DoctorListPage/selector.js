export const selectCountries = state => state.country.countries;
export const selectCountryLoadingStatus = state => state.country.countryLoadingStatus;
export const selectAppointmentTypes = state => state.doctorList.appointmentTypes;
export const selectSpecializations = state => state.doctorList.specializations;
export const selectAddDoctorStatus = state => state.doctorList.doctorAddStatus;
export const selectOptionalInfoUpdatingStatus = state => state.doctorList.optionalInfoUpdatingStatus;
export const selectGeneralInfo = state => state.doctorList.generalInfo;
export const selectDoctors = (state) => state.doctorList.doctors;
export const selectWorkExperience = state => state.doctorList.workExperience;
export const selectHospital = state => state.doctorList.hospital;
export const selectEducation= state => state.doctorList.education;
export const selectDescription = (state) => state.doctorList.description;
export const selectSessions = state => state.doctorList.availabilityCalender;
export const selectConsultationPlans = state => state.doctorList.consultationPlan;
export const selectEducationUpdateStatus = state => state.doctorList.educationUpdateStatus;
export const selectExperienceUpdateStatus = state => state.doctorList.experienceUpdateStatus;
export const selectConsultationPlanUpdateStatus = state => state.doctorList.consultationPlanUpdateStatus;
export const selectSessionUpdateStatus = state => state.doctorList.sessionUpdateStatus;
export const selectHospitalUpdateStatus = state => state.doctorList.hospitalUpdateStatus;
export const selectGeneralInfoUpdateStatus = state => state.doctorList.generalInfoUpdateStatus;
export const selectProfilePicture = state => state.doctorList.profilePicture;
export const selectProfilePictureUploadingStatus = state => state.doctorList.profilePictureUploadingStatus;
export const selectSearchStatus = state => state.doctorList.searchStatus;
export const selectProfileDataUpdatingStatus = state => state.doctorList.profileDataUpdatingStatus;
export const selectProfileDataUpdatingError = state => state.doctorList.profileDataUpdatingError;
export const selectDescriptionStatus = (state) => state.doctorList.descriptionUpdateStatus;