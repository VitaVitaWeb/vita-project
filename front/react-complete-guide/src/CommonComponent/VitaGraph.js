// import "./VitaGraphStyle.css";
// import { ProgressBar } from "react-bootstrap";
// import React from "react";

// function VitaGraph(props) {
//   const contentLength = props.content;
//   const todayLength = props.today;
//   const percentage = ((contentLength / todayLength) * 100).toFixed(2); // 이 코드는 숫자를 소수점 두 자리까지 반올림합니다

//   const compareContentLength = {
//     width:
//       contentLength > todayLength
//         ? "350px"
//         : (contentLength / todayLength) * 350 + "px",
//     backgroundColor: contentLength > todayLength ? "#C9330E" : "#FF5C35",
//     borderRadius:
//       contentLength > todayLength ? "50px 50px 50px 50px" : "50px 0px 0px 50px",
//   };

//   const compareTodayLength = {
//     width:
//       contentLength > todayLength
//         ? (todayLength / contentLength) * 350 + "px"
//         : "350px",
//     backgroundColor: "transparent",
//     borderRadius:
//       contentLength > todayLength ? "50px 0px 0px 50px" : "50px 50px 50px 50px",
//   };

//   const nutrientContentText = {
//     color: contentLength > todayLength ? "#C9330E" : "#FF5C35",
//   };

//   const infoContentLength = {
//     width:
//       contentLength > todayLength
//         ? "700px"
//         : (contentLength / todayLength) * 700 + "px",
//     backgroundColor: contentLength > todayLength ? "#C9330E" : "#FF5C35",
//     borderRadius:
//       contentLength > todayLength ? "50px 50px 50px 50px" : "50px 0px 0px 50px",
//   };

//   const infoTodayLength = {
//     width:
//       contentLength > todayLength
//         ? (todayLength / contentLength) * 700 + "px"
//         : "700px",
//     backgroundColor: "transparent",
//     borderRadius:
//       contentLength > todayLength ? "50px 0px 0px 50px" : "50px 50px 50px 50px",
//   };

//   const nutrientUnits = {
//     "비타민 A": "mcg",
//     "비타민 B1": "mg",
//     "비타민 B2": "mg",
//     "비타민 B3": "mgNE",
//     "비타민 B5": "mg",
//     "비타민 B7": "mcg",
//     "비타민 B9": "mcgDFE",
//     "비타민 B12": "mcg",
//     "비타민 C": "mg",
//     "비타민 E": "mg",
//     "비타민 D": "mcg",
//     크롬: "mcg",
//     몰리브덴: "mcg",
//     아이오딘: "mcg",
//     망간: "mg",
//     셀레늄: "mcg",
//     구리: "mcg",
//     아연: "mg",
//     철: "mg",
//     마그네슘: "mg",
//     칼슘: "mg",
//     유산균: "억 CFU",
//     루테인: "mg",
//     밀크씨슬: "mg",
//     "오메가-3": "mg",
//     MSM: "mg",
//     프로폴리스: "mg",
//   };

//   const getUnitForNutrient = (nutrient) => nutrientUnits[nutrient];

//   // 영양소에 해당하는 단위를 가져옵니다.
//   const nutrientUnit = getUnitForNutrient(props.nutrient);

//   if (props.type === "compare") {
//     return (
//       <div>
//         <span className="compare-nutrient-range"></span>
//         <>
//           {contentLength != null ? (
//             <span
//               className="compare-nutrient-content"
//               style={compareContentLength}
//             >
//               <div
//                 className="nutrient-content-text"
//                 style={nutrientContentText}
//               >
//                 {props.content}
//                 {nutrientUnit}
//               </div>
//             </span>
//           ) : (
//             <></>
//           )}
//         </>
//         <span className="compare-today-range" style={compareTodayLength}>
//           <div className="nutrient-today-text">
//             {props.today}
//             {nutrientUnit}
//           </div>
//         </span>
//       </div>
//     );
//   } else if (props.type === "info") {
//     return (
//       <div>
//         <span className="info-nutrient-range"></span>
//         <>
//           {contentLength != null ? (
//             <span className="info-nutrient-content" style={infoContentLength}>
//               <div
//                 className="nutrient-content-text"
//                 style={nutrientContentText}
//               >
//                 {props.content}
//                 {nutrientUnit}
//               </div>
//             </span>
//           ) : (
//             <></>
//           )}
//         </>
//         <span className="info-today-range" style={infoTodayLength}>
//           <div className="nutrient-today-text">
//             {props.today}
//             {nutrientUnit}
//           </div>
//         </span>
//       </div>
//     );
//   }
// }
// export default VitaGraph;
import "./VitaGraphStyle.css";
import { ProgressBar } from "react-bootstrap";
import React from "react";

function VitaGraph(props) {
  const contentLength = props.content;
  const todayLength = props.today;
  const percentage = ((contentLength / todayLength) * 100).toFixed(2);
  let barColor = "transparent"; // default to transparent
  if (percentage > 0 && percentage < 50) {
    barColor = "#C9330E"; // red for less than 50%
  } else if (percentage >= 50 && percentage < 100) {
    barColor = "#FF5C35"; // orange for 50-99%
  } else if (percentage >= 100) {
    barColor = "#008000"; // green for 100% or more
  }
  const nutrientUnits = {
    "비타민 A": "mcg",
    "비타민 B1": "mg",
    "비타민 B2": "mg",
    "비타민 B3": "mgNE",
    "비타민 B5": "mg",
    "비타민 B7": "mcg",
    "비타민 B9": "mcgDFE",
    "비타민 B12": "mcg",
    "비타민 C": "mg",
    "비타민 E": "mg",
    "비타민 D": "mcg",
    크롬: "mcg",
    몰리브덴: "mcg",
    아이오딘: "mcg",
    망간: "mg",
    셀레늄: "mcg",
    구리: "mcg",
    아연: "mg",
    철: "mg",
    마그네슘: "mg",
    칼슘: "mg",
    유산균: "억 CFU",
    루테인: "mg",
    밀크씨슬: "mg",
    "오메가-3": "mg",
    MSM: "mg",
    프로폴리스: "mg",
  };
  const getUnitForNutrient = (nutrient) => nutrientUnits[nutrient];
  const nutrientUnit = getUnitForNutrient(props.nutrient);

  return (
    <div style={{ position: "relative", width: "400px", height: "40px" }}>
      <ProgressBar
        now={percentage}
        style={{
          borderRadius: "50px",
          backgroundColor: "transparent",
          border: "1px solid #a7a7a7",
          height: "40px",
          width: "400px",
        }}
      >
        <div
          className="progress-bar-animated"
          style={{
            width: `${percentage}%`,
            backgroundColor: barColor,
            borderRadius: "50px",
            height: "100%",
          }}
        />
      </ProgressBar>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: "#000000",
        }}
      >
        {contentLength}
        {nutrientUnit} ({percentage}%)
      </div>
    </div>
  );
}

export default VitaGraph;
