import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { extendTheme } from "native-base";
import { DEFAULT_THEME, AppShell } from "@shiksha/common-lib";
import SchoolProfile from "pages/SchoolProfile";
import Myvisitspage from "./pages/MyVisitsPage";
import AttendanceReportDashboard from "./pages/reports/AttendanceReportDashboard";
import AttendanceSectionWiseReport from "./pages/reports/AttendanceSectionWiseReport";
import AttendanceDetailedReport from "./pages/reports/AttendanceDetailedReport";
import AssessmentReportDashboard from "./pages/reports/AssessmentReportDashboard";
import AssessmentSectionWiseReport from "./pages/reports/AssessmentSectionWiseReport";
import AssessmentDetailedReport from "./pages/reports/AssessmentDetailedReport";
import TeacherDetails from "pages/TeacherDetails";
import TeacherAttendanceReport from "pages/TeacherAttendanceReport";
import NewVisitPage from "./pages/visit/NewVisitPage";
import VisitSubmit from "./pages/visit/VisitSubmit";
import TeacherVisitReport from "./pages/TeacherVisitReport";

function App() {
  const theme = extendTheme(DEFAULT_THEME);
  const routes = [
    {
      path: "new-visit",
      component: NewVisitPage,
    },
    {
      path: "visit-submit",
      component: VisitSubmit,
    },
    {
      path: "teacher-visit-report",
      component: TeacherVisitReport,
    },
    {
      path: "assessment-report",
      component: AssessmentReportDashboard,
    },
    {
      path: "assessment-section-report",
      component: AssessmentSectionWiseReport,
    },
    {
      path: "assessment-detailed-report",
      component: AssessmentDetailedReport,
    },
    {
      path: "attendance-report",
      component: AttendanceReportDashboard,
    },
    {
      path: "attendance-section-report",
      component: AttendanceSectionWiseReport,
    },
    {
      path: "attendance-detailed-report",
      component: AttendanceDetailedReport,
    },
    {
      path: "my-visits",
      component: Myvisitspage,
    },
    {
      path: "school-profile",
      component: SchoolProfile,
    },
    ,
    {
      path: "teacher-details",
      component: TeacherDetails,
    },
    {
      path: "teacher-attendance-report",
      component: TeacherAttendanceReport,
    },
    {
      path: "*",
      component: SchoolProfile,
    },
  ];
  const LoginComponent = React.lazy(() => import("core/Login"));

  return (
    <AppShell theme={theme} routes={routes} AuthComponent={LoginComponent} />
  );
}

export default App;
