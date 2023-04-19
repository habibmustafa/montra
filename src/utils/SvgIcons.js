import React from "react";
import { SvgXml } from "react-native-svg";

const SvgIcons = ({ icon, size = 32, color="#FFFFFF" }) => {
   let svg;

   switch (icon) {
      case "Food and Drink":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width=${size} height=${size}><path d="M24,16.5V17H9a4.554,4.554,0,0,1,4.5-5h6A4.5,4.5,0,0,1,24,16.5Zm-5.8,4.329a1,1,0,0,1-1.109,0L14.343,19H9a4.555,4.555,0,0,0,4.5,5h6A4.554,4.554,0,0,0,24,19h-3.05ZM7,16.5v3a6.469,6.469,0,0,0,1.832,4.51h-2.3A5.005,5.005,0,0,1,1.572,19.63L.059,7.572A3.02,3.02,0,0,1,3,4.017H9.617L9.79,2.633A3,3,0,0,1,12.765.006H16a1,1,0,0,1,0,2H12.765c-1.09,0-1.027,1.245-1.134,2.012H14a3.017,3.017,0,0,1,2.928,3.652L16.635,10H13.5A6.506,6.506,0,0,0,7,16.5Zm4.38-10.482L11.133,8h3.74l.085-.675A1.011,1.011,0,0,0,14,6.016ZM9.118,8l.249-1.986H3a1.006,1.006,0,0,0-.977,1.216l.1.77Z" fill="#FD3C4A" /></svg>`;
         break;
      case "Transportation":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width=${size} height=${size}><path d="M22,18H2a2,2,0,0,1-2-2V15a4,4,0,0,1,4-4H20a4,4,0,0,1,4,4v1A2,2,0,0,1,22,18ZM3.058,20c-.587,3.954,5.472,3.952,4.884,0Zm13,0c-.587,3.954,5.472,3.952,4.884,0ZM12,9h7.825L16.437,4.141A5,5,0,0,0,12.336,2H12ZM10,2H8.5A5.024,5.024,0,0,0,3.825,5.228L2.3,9.249A5.956,5.956,0,0,1,4,9h6Z" fill="#7F3DFF"/></svg>`;
         break;
      case "Shopping":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width=${size} height=${size}><path d="M20,11H10c-2.206,0-4,1.794-4,4v4c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5v-4c0-2.206-1.794-4-4-4Zm-1,5c0,2.206-1.794,4-4,4s-4-1.794-4-4v-1c0-.553,.448-1,1-1s1,.447,1,1v1c0,1.103,.897,2,2,2s2-.897,2-2v-1c0-.553,.448-1,1-1s1,.447,1,1v1Zm0-7c0-2.206-1.794-4-4-4h-1v-.5c0-2.481-2.019-4.5-4.5-4.5S5,2.019,5,4.5v.5h-1C1.794,5,0,6.794,0,9v5c0,2.414,1.721,4.435,4,4.899v-3.899c0-3.309,2.691-6,6-6h9ZM7,4.5c0-1.379,1.122-2.5,2.5-2.5s2.5,1.121,2.5,2.5v.5H7v-.5Z" fill="#FCAC12"/></svg>`;
         break;
      case "Entertainment":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width=${size} height=${size}><path d="M19,9H14a5.006,5.006,0,0,0-5,5v5a5.006,5.006,0,0,0,5,5h5a5.006,5.006,0,0,0,5-5V14A5.006,5.006,0,0,0,19,9Zm-5,6a1,1,0,1,1,1-1A1,1,0,0,1,14,15Zm5,5a1,1,0,1,1,1-1A1,1,0,0,1,19,20ZM15.6,5,12.069,1.462A5.006,5.006,0,0,0,5,1.462L1.462,5a5.006,5.006,0,0,0,0,7.071L5,15.6a4.961,4.961,0,0,0,2,1.223V14a7.008,7.008,0,0,1,7-7h2.827A4.961,4.961,0,0,0,15.6,5ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10ZM9,6a1,1,0,1,1,1-1A1,1,0,0,1,9,6Z" fill="#FCAC12"/></svg>`;
         break;
      case "Personal care and Health":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width=${size} height=${size}><path d="m21,7v12c0,2.757-2.243,5-5,5h-8c-2.757,0-5-2.243-5-5V7c0-2.757,2.243-5,5-5h.171c.413-1.164,1.525-2,2.829-2h2c1.304,0,2.416.836,2.829,2h.171c2.757,0,5,2.243,5,5Zm-11.5,3.5c0,1.379,1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5Zm7.468,7.251c-.559-2.173-2.648-3.751-4.968-3.751s-4.409,1.578-4.968,3.751c-.138.535.184,1.08.719,1.217.537.141,1.08-.184,1.217-.719.33-1.282,1.633-2.249,3.032-2.249s2.702.967,3.032,2.249c.116.452.522.751.968.751.082,0,.166-.01.25-.032.535-.137.857-.683.719-1.217Z" fill="#0077FF"/></svg>`;
         break;
      case "Housing":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width=${size} height=${size}><path d="M21.796,5.578L14.797,.856c-1.69-1.14-3.903-1.14-5.594,0L2.204,5.577c-1.378,.93-2.204,2.484-2.204,4.146v9.276c0,2.761,2.239,5,5,5h3.174c.62,0,1.175-.381,1.399-.959l1.564-4.041h-2.755c-1.086,0-1.739-1.204-1.147-2.114l4.952-7.361c.215-.328,.581-.525,.973-.525,.782,0,1.341,.755,1.114,1.503l-1.369,4.497h2.87c.843,0,1.435,.831,1.16,1.628l-2.032,6.054c-.217,.648,.265,1.318,.948,1.318h3.15c2.761,0,5-2.239,5-5V9.724c0-1.662-.826-3.216-2.204-4.146Z" fill="#7F3DFF"/></svg>`;
         break;
      case "Credit and Debt":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width=${size} height=${size}><path d="M19,3H5A5.006,5.006,0,0,0,0,8H24A5.006,5.006,0,0,0,19,3Z" fill="#FD3C4A"/><path d="M0,16a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10H0Zm7-.5A1.5,1.5,0,1,1,5.5,14,1.5,1.5,0,0,1,7,15.5" fill="#FD3C4A"/></svg>`;
         break;
      case "Education":
         svg = `<svg id="Layer_1" height=${size} viewBox="0 0 24 24" width=${size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z" fill="#0077FF"/></svg>`;
         break;
      case "Savings and Investments":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width=${size} height=${size}><path d="M8.001,19.998h8v.31c0,2.035-1.655,3.69-3.69,3.69h-.619c-2.035,0-3.69-1.655-3.69-3.69v-.31Zm13-11c0,2.59-1.118,5.055-3.068,6.763-.739,.648-1.275,1.413-1.594,2.237H7.564c-.358-.877-.926-1.702-1.695-2.417-2.149-2.001-3.167-4.83-2.793-7.761C3.591,3.78,6.905,.515,10.957,.057c2.567-.289,5.13,.522,7.038,2.227,1.91,1.707,3.006,4.154,3.006,6.714Zm-5.001,2.002c0-1.36-.974-2.51-2.315-2.733l-3.041-.507c-.373-.062-.644-.382-.644-.76,0-.551,.448-1,1-1h2.268c.356,0,.688,.192,.867,.5,.275,.478,.886,.642,1.366,.365,.478-.277,.642-.888,.364-1.366-.534-.925-1.53-1.5-2.598-1.5h-.268v-1c0-.552-.447-1-1-1s-1,.448-1,1v1c-1.654,0-3,1.346-3,3,0,1.36,.974,2.51,2.315,2.733l3.041,.507c.373,.062,.644,.382,.644,.76,0,.551-.448,1-1,1h-2.268c-.356,0-.688-.192-.867-.5-.276-.479-.887-.644-1.366-.365-.478,.277-.642,.888-.364,1.366,.534,.925,1.53,1.499,2.598,1.499h.268v1c0,.552,.447,1,1,1s1-.448,1-1v-1c1.654,0,3-1.346,3-3Z" fill="#00A86B"/></svg>`;
         break;
      case "Salary":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width=${size} height=${size}><path d="M13.053,5.079c.971-.909,2.344-2.36,2.894-3.744,.255-.641-.257-1.335-.947-1.335h-6c-.69,0-1.202,.693-.947,1.335,.55,1.384,1.923,2.835,2.894,3.744C5.569,5.878,1,12.618,1,18c0,3.309,2.691,6,6,6h10c3.309,0,6-2.691,6-6,0-5.382-4.569-12.122-9.947-12.921Z" fill="#00A86B"/></svg>`;
         break;
      case "Sales":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width=${size} height=${size}><path d="M23.96,2.161L2.161,23.961,.04,21.84,21.839,.04l2.121,2.121ZM0,4.5C0,2.019,2.019,0,4.5,0s4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5S0,6.981,0,4.5Zm3,0c0,.827,.673,1.5,1.5,1.5s1.5-.673,1.5-1.5-.673-1.5-1.5-1.5-1.5,.673-1.5,1.5Zm21,15c0,2.481-2.019,4.5-4.5,4.5s-4.5-2.019-4.5-4.5,2.019-4.5,4.5-4.5,4.5,2.019,4.5,4.5Zm-3,0c0-.827-.673-1.5-1.5-1.5s-1.5,.673-1.5,1.5,.673,1.5,1.5,1.5,1.5-.673,1.5-1.5Z" fill="#FD3C4A"/></svg>`;
         break;
      case "Passive Income":
         svg = `<svg fill="none" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                   width=${size} height=${size} viewBox="0 0 958.736 958.736"
                   xml:space="preserve">
                  <g>
                     <g>
                        <path d="M95.5,944.268h63.8c27.6,0,50-22.399,50-50v-164.3c-53.2,7.8-107.9,12.7-162.9,14.4c-0.3,0-0.6,0-1,0v149.8
                           C45.5,921.868,67.9,944.268,95.5,944.268z" fill="#0D0E0F"/>
                        <path d="M389.1,944.268c27.601,0,50-22.399,50-50v-219.5c-26.5,9.101-54,17.4-81.699,24.801c-24.801,6.6-50.4,12.6-75.9,17.8
                           c-2,0.399-4.1,0.8-6.2,1.2v175.6c0,27.6,22.4,50,50,50h63.8V944.268z" fill="#0D0E0F"/>
                        <path d="M618.7,944.268c27.6,0,50-22.399,50-50V563.868c-4.8,3.2-9.601,6.3-14.5,9.3c-42.3,26.6-88.4,50.7-137.101,71.6
                           c-4,1.7-8.1,3.4-12.199,5.101v244.3c0,27.6,22.399,50,50,50h63.8V944.268z" fill="#0D0E0F"/>
                        <path d="M898.4,894.268v-577.8c-10.101,20.5-21.801,40.7-35,60.4c-29.101,43.3-65.5,84.3-108.4,121.8
                           c-6.6,5.8-13.4,11.5-20.4,17.2v378.5c0,27.6,22.4,50,50,50H848.4C876,944.268,898.4,921.868,898.4,894.268z" fill="#0D0E0F"/>
                        <path d="M25.2,713.868c0.1,0,0.3,0,0.4,0c6.7-0.101,13.3-0.3,20-0.5c55.6-1.7,110.3-6.7,163.8-14.7c22.2-3.3,44.1-7.2,65.9-11.6
                           c25-5.101,49.7-10.9,74.101-17.4c30.8-8.2,60.699-17.4,89.699-27.7c22.5-8,44.5-16.5,65.9-25.7c47.3-20.3,91.7-43.399,132.8-69.3
                           c10.601-6.7,21-13.5,31-20.5c23.5-16.3,45.5-33.399,65.9-51.2c40.899-35.699,75.399-74.399,103.1-115.7
                           c27.8-41.4,48.101-84.4,60.7-128.5c5.7-19.9,9.8-39.9,12.4-60.2h22.8c20.1,0,32-22.6,20.6-39.2l-73.5-106.5
                           c-5-7.2-12.8-10.8-20.6-10.8s-15.601,3.6-20.601,10.8l-73.399,106.5c-11.4,16.6,0.399,39.2,20.6,39.2h22.9
                           c-7.8,45.6-26.2,90.2-55,133c-6.3,9.3-13,18.5-20.101,27.5c-18.899,24-40.899,46.899-65.899,68.7c-25.2,22-53.3,42.8-84.3,62.399
                           c-25.101,15.8-51.601,30.5-79.5,44c-21.2,10.3-43.2,19.9-65.9,28.8c-36.6,14.4-75.2,27-115.5,37.801c-16,4.3-32.1,8.199-48.4,11.8
                           c-21.7,4.8-43.7,9-65.9,12.6c-53.4,8.7-108.1,14-163.8,15.9c-6.9,0.2-13.8,0.399-20.8,0.5c-13.6,0.3-24.6,11.3-24.6,25v50
                           C0.2,702.668,11.4,713.868,25.2,713.868z" fill="#0D0E0F"/>
                     </g>
                  </g>
               </svg>`;
         break;
      case "Scholarship":
         svg = `<svg fill="none" height=${size} width=${size} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 489.038 489.038" xml:space="preserve">
                  <g>
                     <path d="M302.7,152.181c-32.3-18.6-84.5-18.7-116.6,0c-32.1,18.6-31.9,48.9,0.4,67.5s84.5,18.6,116.5,0
                        C335.2,200.981,335,170.781,302.7,152.181z M287.9,181.481c-2.8,0.9-5.5,1.8-8.4,2.6c-1.7,0.5-2.7,0.6-3.5,0.2
                        c-0.4-0.2-0.8-0.7-1.1-1.3c-1.9-3-4.7-5.6-8.6-7.8c-0.4-0.3-0.9-0.5-1.4-0.8c-1.2-0.6-2.5-1.2-4-1.5c-5.4-1.2-10.1,0.8-9.4,4.1
                        c0.3,1.7,1.2,3.3,2.3,4.9c1.9,2.7,4,5.4,5.4,8.2c4.5,9-5.3,17.8-20.9,18.7c-5.7,0.3-11-0.4-16-2c-2.2-0.7-3.8-0.7-5.5,0.4
                        c-1.6,1-3.4,2-5.1,3c-1.5,0.9-3.1,0.9-4.7,0c-1.1-0.6-2.2-1.2-3.3-1.8c-0.8-0.4-1.5-0.9-2.3-1.4c-1.6-0.9-1.4-1.9,0.2-2.9
                        c1.2-0.7,2.5-1.5,3.7-2.2c2.8-1.6,2.8-1.8,0.5-3.6c-2.9-2.3-5.5-4.7-7.1-7.4c-1.3-2.1-0.9-2.6,2.3-3.7c2.5-0.8,4.9-1.6,7.4-2.4
                        c1.8-0.6,2.8-0.7,3.6-0.3c0.4,0.3,0.8,0.7,1.1,1.4c1.7,3,4.3,5.8,7.7,8.3c0.6,0.4,1.2,0.8,1.8,1.2c1.8,1.1,3.9,1.9,6.4,2.5
                        c6.1,1.4,11.8-1.1,11.1-4.9c-0.2-1.3-0.9-2.5-1.7-3.8c-2.1-3.1-4.8-6.1-6.3-9.4c-2.3-5.3-1.3-10.2,6.2-14
                        c8.4-4.3,17.8-4.6,27.7-1.9c4.1,1.1,4.1,1.1,7.2-0.7c1.1-0.6,2.1-1.2,3.2-1.8c2.4-1.3,3.2-1.3,5.6,0c0.3,0.1,0.5,0.3,0.7,0.4
                        c0.5,0.3,1,0.6,1.4,0.9c5,2.9,5,2.9,0.1,5.8c-3.5,2-3.5,2.1-0.6,4.4c2.3,1.8,4.1,3.8,5.5,5.8
                        C290.2,180.081,289.8,180.881,287.9,181.481z M486,215.481l-293.4-169.3c-4-2.3-10.6-2.3-14.6,0L3.2,147.781c-4,2.3-4,6.1,0,8.5
                        l293.3,169.3c4.1,2.4,10.6,2.3,14.6,0l174.9-101.6C490,221.681,490.1,217.881,486,215.481z M333.1,286.481c-1.6-1.6-3.6-3-5.9-4.3
                        c-14.9-8.6-39-8.6-53.9,0c-1.1,0.7-2.1,1.3-3.1,2.1l-197.6-114.2c1.9-0.8,3.7-1.6,5.4-2.6c14.8-8.6,14.7-22.6-0.2-31.2
                        c-1.6-0.9-3.4-1.8-5.2-2.5l81.5-47.3c1.3,1,2.7,2.1,4.3,3c14.9,8.6,39.1,8.6,53.9,0c1.7-1,3.2-2,4.4-3.1l198.2,114.5
                        c-2.6,0.9-5.1,2-7.3,3.3c-14.8,8.6-14.7,22.6,0.2,31.2c2.3,1.3,4.9,2.4,7.6,3.4L333.1,286.481z M357,243.281l-12.9,7.5
                        c-2,1.1-5.2,1.2-7.2,0l-22.7-13.1c-2-1.2-2-3,0-4.2l12.9-7.5c2-1.1,5.2-1.2,7.2,0l22.7,13.1C359,240.281,359,242.181,357,243.281z
                         M175,138.181l-12.9,7.5c-2,1.1-5.2,1.2-7.2,0l-22.7-13.1c-2-1.2-2-3,0-4.2l12.9-7.5c2-1.1,5.2-1.2,7.2,0l22.7,13.1
                        C177,135.181,177,137.081,175,138.181z M466.2,267.581l22.8,13.2l-183.3,106.5l-6-3.4l-16.9-9.7L0,210.581l22.6-13.1l282.9,163.4
                        L466.2,267.581z M465.8,325.281l22.8,13.2L306,444.581l-5.9-3.4l-16.9-9.7L0,267.581l22.6-13.1l283.3,163.8L465.8,325.281z" fill="#FCAC12"/>
                  </g>
               </svg>`;
         break;
      case "Prize or Award":
         svg = `<svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width=${size} height=${size} fill="none"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 12.3137 15.3137 15 12 15C8.68629 15 6 12.3137 6 9Z"
                        fill="#00A86B"/>
                  <path d="M7.10992 14.0087L6.14635 16.8994C5.28723 19.4767 8.02267 21.7775 10.4147 20.4895L11.5261 19.891C11.8221 19.7316 12.1784 19.7316 12.4743 19.891L13.5858 20.4895C15.9778 21.7775 18.7133 19.4767 17.8541 16.8994L16.8905 14.0083C15.6287 15.2406 13.903 16 12 16C10.0972 16 8.37167 15.2407 7.10992 14.0087Z"
                     fill="#00A86B"/>
               </svg>`;
         break;
      case "Refunds":
         svg = `<svg width=${size} height=${size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <title>currency-revenue</title>
                  <g id="Layer_2" data-name="Layer 2">
                     <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none"/>
                     </g>
                     <g id="Q3_icons" data-name="Q3 icons">
                        <path d="M44,7.1V14a2,2,0,0,1-2,2H35a2,2,0,0,1-2-2.3A2.1,2.1,0,0,1,35.1,12h2.3A18,18,0,0,0,6.1,22.2a2,2,0,0,1-2,1.8h0a2,2,0,0,1-2-2.2A22,22,0,0,1,40,8.9V7a2,2,0,0,1,2.3-2A2.1,2.1,0,0,1,44,7.1Z" fill="#7F3DFF"/>
                        <path d="M4,40.9V34a2,2,0,0,1,2-2h7a2,2,0,0,1,2,2.3A2.1,2.1,0,0,1,12.9,36H10.6A18,18,0,0,0,41.9,25.8a2,2,0,0,1,2-1.8h0a2,2,0,0,1,2,2.2A22,22,0,0,1,8,39.1V41a2,2,0,0,1-2.3,2A2.1,2.1,0,0,1,4,40.9Z" fill="#7F3DFF"/>
                        <path d="M24.7,22c-3.5-.7-3.5-1.3-3.5-1.8s.2-.6.5-.9a3.4,3.4,0,0,1,1.8-.4,6.3,6.3,0,0,1,3.3.9,1.8,1.8,0,0,0,2.7-.5,1.9,1.9,0,0,0-.4-2.8A9.1,9.1,0,0,0,26,15.3V13a2,2,0,0,0-4,0v2.2c-3,.5-5,2.5-5,5.2s3.3,4.9,6.5,5.5,3.3,1.3,3.3,1.8-1.1,1.4-2.5,1.4h0a6.7,6.7,0,0,1-4.1-1.3,2,2,0,0,0-2.8.6,1.8,1.8,0,0,0,.3,2.6A10.9,10.9,0,0,0,22,32.8V35a2,2,0,0,0,4,0V32.8a6.3,6.3,0,0,0,3-1.3,4.9,4.9,0,0,0,2-4h0C31,23.8,27.6,22.6,24.7,22Z" fill="#7F3DFF"/>
                     </g>
                  </g>
               </svg>`;
         break;
      case "Transfer":
         svg = `<svg width=${size} height=${size} viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1301 12.93V13.93C18.1301 14.5866 18.0007 15.2368 17.7495 15.8434C17.4982 16.4501 17.1299 17.0013 16.6656 17.4656C16.2013 17.9299 15.6501 18.2982 15.0435 18.5494C14.4369 18.8007 13.7867 18.93 13.1301 18.93H9.87007C9.85465 19.4769 9.68997 20.0092 9.39386 20.4692C9.09775 20.9292 8.68147 21.2995 8.19007 21.54C7.78024 21.7448 7.32822 21.851 6.87007 21.85C6.19234 21.8541 5.53322 21.6285 5.00007 21.21L1.29007 18.3C0.928742 18.0196 0.636313 17.6603 0.435145 17.2495C0.233976 16.8387 0.129395 16.3874 0.129395 15.93C0.129395 15.4727 0.233976 15.0213 0.435145 14.6106C0.636313 14.1998 0.928742 13.8405 1.29007 13.56L5.00007 10.65C5.44707 10.2933 5.98673 10.0717 6.55545 10.0115C7.12417 9.95126 7.69826 10.0548 8.21007 10.31C8.8916 10.636 9.41647 11.2184 9.67007 11.93H17.1001C17.2339 11.926 17.3672 11.9489 17.492 11.9974C17.6168 12.0458 17.7306 12.1188 17.8267 12.2121C17.9227 12.3054 17.9991 12.417 18.0512 12.5403C18.1033 12.6636 18.1301 12.7961 18.1301 12.93Z" fill="#0077FF"/>
                  <path d="M27.8701 6.07001C27.8702 6.52734 27.7657 6.97863 27.5647 7.3894C27.3636 7.80016 27.0713 8.15952 26.7101 8.44001L23.0001 11.35C22.4595 11.7701 21.7947 11.9987 21.1101 12C20.652 12.0009 20.2 11.8948 19.7901 11.69C19.1086 11.364 18.5837 10.7817 18.3301 10.07H10.8701C10.6049 10.07 10.3505 9.96466 10.163 9.77712C9.97547 9.58959 9.87012 9.33523 9.87012 9.07001V8.07001C9.87012 6.74393 10.3969 5.47216 11.3346 4.53448C12.2723 3.5968 13.544 3.07001 14.8701 3.07001H18.1301C18.1423 2.51096 18.3105 1.96644 18.6157 1.4979C18.9209 1.02935 19.351 0.655434 19.8574 0.418337C20.3638 0.181241 20.9264 0.0904046 21.4817 0.156079C22.0371 0.221754 22.563 0.441325 23.0001 0.790015L26.7101 3.70001C27.0713 3.98051 27.3636 4.33987 27.5647 4.75063C27.7657 5.1614 27.8702 5.61269 27.8701 6.07001Z" fill="#0077FF"/>
               </svg>`;
         break;
      case "Cash":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width=${size} height=${size}><path d="M23.999,8c0-1.271-.583-2.439-1.6-3.205-1.007-.757-2.274-.991-3.481-.644-.857,.248-1.848,.349-3.418,.349-1.366,0-2.639-.347-3.987-.715-1.415-.386-2.879-.785-4.513-.785-1.159,0-2.427,.259-3.768,.771C1.298,4.508-.002,6.389-.002,8.452v7.548c0,1.271,.584,2.439,1.601,3.205,1.006,.757,2.274,.991,3.481,.644,.857-.248,1.849-.349,3.42-.349,1.366,0,2.639,.347,3.985,.715,1.415,.386,2.879,.785,4.513,.785,1.159,0,2.427-.259,3.768-.771,1.935-.737,3.234-2.618,3.234-4.681v-7.548ZM5,15c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm0-6c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm9,6c0,.552-.447,1-1,1s-1-.448-1-1v-3.586l-.293,.293c-.391,.391-1.023,.391-1.414,0s-.391-1.023,0-1.414l2-2c.286-.287,.716-.372,1.09-.217,.374,.155,.617,.52,.617,.924v6Zm5,2c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm0-6c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z" fill="#248AFF"/></svg>`;
         break;
      case "Credit card":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width=${size} height=${size}><path d="M19,3H5A5.006,5.006,0,0,0,0,8H24A5.006,5.006,0,0,0,19,3Z" fill="#248AFF"/><path d="M0,16a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10H0Zm7-.5A1.5,1.5,0,1,1,5.5,14,1.5,1.5,0,0,1,7,15.5" fill="#248AFF"/></svg>`;
         break;
      case "Savings":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width=${size} height=${size}><path d="M22.432,11.046c-.338-.846-.824-1.636-1.432-2.327v-3.715c0-.618-.278-1.192-.764-1.576-.478-.377-1.089-.513-1.681-.374-1.825,.435-3.194,1.469-3.927,2.946h-5.363c-2.581,0-4.898,1.158-6.419,2.969-1.2-.175-1.055-1.971,.153-1.969,1.307-.005,1.308-1.995,0-2-3.185-.01-4.129,4.406-1.268,5.709-1.759,3.62-.229,8.282,3.268,10.212v.079c.002,3.351,4.74,4.118,5.829,1h2.343c1.089,3.12,5.827,2.349,5.829-1v-.092c1.56-.903,2.771-2.3,3.432-3.954,.821-.175,1.568-.848,1.568-1.954v-2c0-1.106-.748-1.779-1.568-1.954Zm-4.432,1.954c-1.308-.006-1.308-1.994,0-2,1.308,.006,1.308,1.994,0,2ZM6.052,4.512c-.562-5.591,7.74-6.132,7.948-.512h-4.734c-1.121,0-2.2,.185-3.214,.512Z" fill="#248AFF"/></svg>`;
         break;
      case "Investment":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width=${size} height=${size}><path d="M17.958,2.269C16.028,.549,13.551-.235,10.977,.06,6.924,.527,3.61,3.844,3.097,7.946c-.372,2.969,.643,5.834,2.782,7.863,.951,.901,1.14,1.871,1.14,3.653l.003,.47c0,2.243,1.805,4.068,4.022,4.068h1.956c2.218,0,4.021-1.825,4.021-4.068v-.523c0-1.669,.15-2.708,.942-3.415,1.943-1.734,3.058-4.233,3.058-6.857s-1.116-5.131-3.063-6.867Zm-3.937,17.663c0,.589-.458,1.068-1.021,1.068h-1.956c-.563,0-1.022-.479-1.022-1.068,0,0-.004-.672-.014-.932h4.019c-.002,.137-.006,.932-.006,.932Zm-.559-4.607c-.149,.672-.746,1.175-1.462,1.175-.678,0-1.245-.453-1.43-1.071-.984-.191-1.857-.794-2.369-1.677-.414-.717-.169-1.635,.548-2.049,.716-.415,1.634-.17,2.05,.547,.091,.157,.253,.25,.434,.25h1.181c.323,0,.587-.263,.587-.587,0-.242-.145-.456-.369-.545l-2.376-.95c-1.37-.548-2.255-1.855-2.255-3.331,0-1.61,1.074-2.96,2.538-3.412,.149-.672,.746-1.175,1.462-1.175,.678,0,1.245,.453,1.43,1.071,.983,.191,1.857,.794,2.369,1.678,.414,.717,.169,1.635-.548,2.049-.716,.414-1.635,.17-2.05-.547-.091-.157-.253-.251-.434-.251h-1.181c-.323,0-.587,.263-.587,.587,0,.242,.145,.456,.369,.545l2.376,.95c1.37,.548,2.255,1.855,2.255,3.331,0,1.61-1.074,2.96-2.538,3.412Z" fill="#248AFF"/></svg>`;
         break;
      case "Business":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width=${size} height=${size}><path d="M19,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H5A5.006,5.006,0,0,0,0,9v3H24V9A5.006,5.006,0,0,0,19,4ZM8.184,4A3,3,0,0,1,11,2h2a3,3,0,0,1,2.816,2Z"/><path d="M13,15a1,1,0,0,1-2,0V14H0v5a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V14H13Z" fill="#248AFF"/></svg>`;
         break;
      case "Other/miscellaneous":
         svg = `<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width=${size} height=${size}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,21V16.693a.875.875,0,0,0-.875-.875H6.75L3,12.072c0-.024,0-.048,0-.072A8.989,8.989,0,0,1,17.6,4.967l-.351.351H13.909V9.136H11.045V12.08a.875.875,0,0,0,.875.875h5.807V13.9a5.976,5.976,0,0,0,1.3,3.712A8.983,8.983,0,0,1,12,21Z" fill="#248AFF"/></svg>`;
         break;
      case "LineChart":
         svg = `<svg width=${size} height=${size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 10C30 11.0609 29.5786 12.0783 28.8284 12.8284C28.0783 13.5786 27.0609 14 26 14C25.3473 14.001 24.7046 13.8395 24.13 13.53L18.35 19.83C18.7712 20.4756 18.997 21.2291 19 22C19 23.0609 18.5786 24.0783 17.8284 24.8284C17.0783 25.5786 16.0609 26 15 26C13.9391 26 12.9217 25.5786 12.1716 24.8284C11.4214 24.0783 11 23.0609 11 22C10.9987 21.455 11.1147 20.9162 11.34 20.42L8.44 18.17C7.74271 18.7124 6.88338 19.0047 6 19C5.20888 19 4.43552 18.7654 3.77772 18.3259C3.11992 17.8864 2.60723 17.2616 2.30448 16.5307C2.00173 15.7998 1.92252 14.9956 2.07686 14.2196C2.2312 13.4437 2.61216 12.731 3.17157 12.1716C3.73098 11.6122 4.44372 11.2312 5.21964 11.0769C5.99556 10.9225 6.79983 11.0017 7.53074 11.3045C8.26164 11.6072 8.88635 12.1199 9.32588 12.7777C9.76541 13.4355 10 14.2089 10 15C9.99851 15.5436 9.88622 16.0812 9.67 16.58L12.56 18.83C13.1693 18.3612 13.9009 18.0779 14.667 18.014C15.4332 17.9502 16.2015 18.1085 16.88 18.47L22.65 12.17C22.2288 11.5244 22.003 10.7709 22 10C22 8.93913 22.4214 7.92172 23.1716 7.17157C23.9217 6.42143 24.9391 6 26 6C27.0609 6 28.0783 6.42143 28.8284 7.17157C29.5786 7.92172 30 8.93913 30 10Z" fill=${color}/>
                  </svg>`;
         break;
      case "CircleChart":
         svg = `<svg width=${size} height=${size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 15H17V4C19.8412 4.22837 22.5083 5.46063 24.5239 7.47614C26.5394 9.49166 27.7716 12.1588 28 15V15Z" fill=${color}/>
                  <path d="M28 17C27.801 19.2756 26.9566 21.4471 25.566 23.2594C24.1754 25.0716 22.2965 26.4493 20.15 27.2306C18.0035 28.0119 15.6786 28.1643 13.4484 27.6699C11.2183 27.1755 9.1756 26.0549 7.56038 24.4396C5.94515 22.8244 4.82449 20.7817 4.33009 18.5516C3.83569 16.3214 3.98809 13.9965 4.76938 11.85C5.55067 9.70349 6.92839 7.82457 8.74065 6.43401C10.5529 5.04346 12.7244 4.19905 15 4V16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17H28Z" fill=${color}/>
                  </svg>`;
         break;
      default:
         svg = `<svg width=${size} height=${size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 15H17V4C19.8412 4.22837 22.5083 5.46063 24.5239 7.47614C26.5394 9.49166 27.7716 12.1588 28 15Z" fill="#7F3DFF"/>
                  <path d="M28 17C27.801 19.2756 26.9566 21.4471 25.566 23.2594C24.1754 25.0716 22.2965 26.4493 20.15 27.2306C18.0035 28.0119 15.6786 28.1643 13.4484 27.6699C11.2183 27.1755 9.1756 26.0549 7.56038 24.4396C5.94515 22.8244 4.82449 20.7817 4.33009 18.5516C3.83569 16.3214 3.98809 13.9965 4.76938 11.85C5.55067 9.7035 6.92839 7.82457 8.74065 6.43401C10.5529 5.04346 12.7244 4.19905 15 4V16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17H28Z" fill="#7F3DFF"/>
                  </svg>`;
   }
   return <SvgXml xml={svg} />;
};

export default SvgIcons;
