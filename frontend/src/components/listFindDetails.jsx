import React from "react";

const ListFindDetails = (prop) => {
  let selectDetails = prop.selectDetails;
  let selectedCategor = prop.selectedCategory;
  console.log(selectDetails);
  console.log(selectedCategor);
  //   console.log(
  //     selectDetails[selectedCategor].map((element) => {
  //       console.log(element);
  //     })
  //   );
  return (
    <>
      <div
        id={`details` + "-" + selectedCategor}
        name={`details` + "-" + selectedCategor}
        className="find-details"
      >
        <ul className="details-list">
          {selectDetails[selectedCategor].map((element, id) => {
            console.log(element);

            // componentOutputTemplate(selectedCategor, element);

            return (
              <li id={id} key={id}>
                <div className="element-details">
                  <a href={element.link}>
                    <span className="findList-element-text">
                      {/* {[
                        element.name,
                        +"  " + " Цена :" + element.price + "руб",
                      ].join("")} */}
                      <p> {element.name}</p>
                      <p> {element.price + "руб"}</p>
                    </span>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ListFindDetails;
