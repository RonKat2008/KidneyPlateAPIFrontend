import React from "react";
import { useState } from "react";

const BrowseFoods = ({ records }) => {
  const [keyWord, setKeyWord] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRows, setSelectedRows] = useState([]);
  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };
  console.log("helloselectedRows", selectedRows);
  const API_KEY = "RBZNkpgbpKMTls8CqmseCaHQA3pmOn8b6dvTL5xV";
  const apiUrl = `https://api.nal.usda.gov/fdc/v1/foods/list?api_key=${API_KEY}&query=${keyWord}`;

  const handleSearchAPI = () => {
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log("hellodata", data);
        setFoodData(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
  const handleChangePage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };
  const calculateColumnSum = (columnName) => {
    console.log("hellocolumnName", columnName);
    return selectedRows.reduce(
      (total, food) =>
        total +
          food?.foodNutrients?.find((nutrient) => nutrient.name === columnName)
            ?.amount || 0,
      0
    );
  };

  const handleRowSelect = (food) => {
    const updatedRows = [...selectedRows, food];
    setSelectedRows(updatedRows);
  };
  const handleRowDelete = (index) => {
    const updatedRows = [...selectedRows];
    updatedRows.splice(index, 1);
    setSelectedRows(updatedRows);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchAPI();
    }
  };
  return (
    <div>
      <section class="breadcrumbs">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb-wrapper">
                <h1> Browse Foods </h1>
                <span>
                  <a href="/">Home</a>
                  <i class="bi bi-chevron-right"></i> Browse Foods{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="introduction sec-mar-top sec-mar-bottom food-search">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <p>
                {" "}
                Powered by the USDA National Nutrient Database, the Food Calorie
                Calculator below allows you to choose from thousands of foods
                and brands, and see nutrition facts such as calories, fat,
                protein, carbohydrates, fiber and sugar. Get started by entering
                your food and drink choices under “Keywords”. If you want a
                quick tally of your choices, click “Add” next to the item to
                display a summary below.{" "}
              </p>
            </div>

            <div class="col-md-12 col-lg-12 mt-3">
              <div class="col-md-6  offset-3">
                <div class="input-group mb-3 food-search">
                  <span class="pt-1 f-13"> Keywords : </span>
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => handleChange(e)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search for Food Item"
                    value={keyWord}
                    aria-label=""
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-secondary" onClick={handleSearchAPI}>
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <table class="table food-table mt-4">
                <thead>
                  <tr>
                    <th> Food </th>
                    <th> Calories </th>
                    <th> Fat </th>
                    <th> Protein </th>
                    <th> Carbs* </th>
                    <th> Fiber </th>
                    <th> Sugar </th>
                    <th> Phosphorous</th>
                    <th> Sodium </th>
                    <th> Potassium </th>
                    <th> Action </th>
                  </tr>
                </thead>
                <tbody>
                  {foodData?.length > 0 ? (
                    foodData
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((food, index) => (
                        <tr key={index}>
                          <td>{food.description}</td>

                          <td>
                            {food.foodNutrients.find(
                              (nutrient) => nutrient.name === "Calories"
                            )?.amount || "-"}{" "}
                            {food.foodNutrients.find(
                              (nutrient) => nutrient.name === "Calories"
                            )?.unitName || ""}
                          </td>

                          <td>
                            {food.foodNutrients.find(
                              (nutrient) =>
                                nutrient.name === "Total lipid (fat)"
                            )?.amount || "-"}{" "}
                            {food.foodNutrients.find(
                              (nutrient) =>
                                nutrient.name === "Total lipid (fat)"
                            )?.unitName || ""}
                          </td>
                          <td>
                            {food.foodNutrients.find(
                              (nutrient) => nutrient.name === "Protein"
                            )?.amount || "-"}{" "}
                            {food.foodNutrients.find(
                              (nutrient) => nutrient.name === "Protein"
                            )?.unitName || ""}
                          </td>
                          <td>
                            {food.foodNutrients.find(
                              (nutrient) =>
                                nutrient.name === "Carbohydrate, by difference"
                            )?.amount || "-"}{" "}
                            {food.foodNutrients.find(
                              (nutrient) =>
                                nutrient.name === "Carbohydrate, by difference"
                            )?.unitName || ""}
                          </td>
                          <td>
                            {food.foodNutrients.find(
                              (nutrient) =>
                                nutrient.name === "Fiber, total dietary"
                            )?.amount || "-"}{" "}
                            {food.foodNutrients.find(
                              (nutrient) =>
                                nutrient.name === "Fiber, total dietary"
                            )?.unitName || ""}
                          </td>
                          <td>
                            {food.foodNutrients.find(
                              (nutrient) =>
                                nutrient.name === "Sugars, total including NLEA"
                            )?.amount || "-"}{" "}
                            {food.foodNutrients.find(
                              (nutrient) =>
                                nutrient.name === "Sugars, total including NLEA"
                            )?.unitName || ""}
                          </td>
                          <td>
                            {food.foodNutrients.find(
                              (nutrient) => nutrient.name === "Phosphorus, P"
                            )?.amount || "-"}{" "}
                            {food.foodNutrients.find(
                              (nutrient) => nutrient.name === "Phosphorus, P"
                            )?.unitName || ""}
                          </td>
                          <td>
                            {food.foodNutrients.find(
                              (nutrient) => nutrient.name === "Sodium, Na"
                            )?.amount || "-"}{" "}
                            {food.foodNutrients.find(
                              (nutrient) => nutrient.name === "Sodium, Na"
                            )?.unitName || ""}
                          </td>
                          <td>
                            {food.foodNutrients.find(
                              (nutrient) => nutrient.name === "Potassium, K"
                            )?.amount || "-"}{" "}
                            {food.foodNutrients.find(
                              (nutrient) => nutrient.name === "Potassium, K"
                            )?.unitName || ""}
                          </td>
                          <td>
                            <button
                              className="btn-sm btn-outline-primary"
                              onClick={() => handleRowSelect(food)}
                            >
                              {" "}
                              <i class="fa fa-plus"></i>{" "}
                            </button>
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td>
                        <p>Please type something and click on Enter</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div>
                  <button
                    onClick={handlePrevPage}
                    class="fa fa-backward"
                    style={{
                      color: page === 0 ? "gray" : "#aa2d17",
                      background: "none",
                      marginRight: "20px",
                    }}
                    disabled={page === 0}
                  ></button>
                </div>

                <div>
                  <button
                    onClick={handleChangePage}
                    class="fa fa-forward"
                    style={{
                      color:
                        page * rowsPerPage + rowsPerPage >=
                        (foodData?.length || 0)
                          ? "gray"
                          : "#aa2d17",
                      background: "none",
                      marginLeft: "10px",
                    }}
                    disabled={
                      page * rowsPerPage + rowsPerPage >= foodData?.length
                    }
                  ></button>
                </div>
              </div>
            </div>
            {selectedRows?.length > 0 && (
              <>
                <h5 class="mt-4"> Summary </h5>

                <table class="table food-table ">
                  <thead>
                    <tr>
                      <th> Food </th>
                      <th> Calories </th>
                      <th> Fat </th>
                      <th> Protein </th>
                      <th> Carbs* </th>
                      <th> Fiber </th>
                      <th> Sugar </th>
                      <th> Phosphorous</th>
                      <th> Sodium </th>
                      <th> Potassium </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedRows?.map((food, index) => (
                      <tr key={index}>
                        <td>{food.description}</td>
                        <td>
                          {food.foodNutrients.find(
                            (nutrient) => nutrient.name === "Calories"
                          )?.amount || "-"}{" "}
                          {food.foodNutrients.find(
                            (nutrient) => nutrient.name === "Calories"
                          )?.unitName || ""}
                        </td>

                        <td>
                          {food.foodNutrients.find(
                            (nutrient) => nutrient.name === "Total lipid (fat)"
                          )?.amount || "-"}{" "}
                          {food.foodNutrients.find(
                            (nutrient) => nutrient.name === "Total lipid (fat)"
                          )?.unitName || ""}
                        </td>
                        <td>
                          {food.foodNutrients.find(
                            (nutrient) => nutrient.name === "Protein"
                          )?.amount || "-"}{" "}
                          {food.foodNutrients.find(
                            (nutrient) => nutrient.name === "Protein"
                          )?.unitName || ""}
                        </td>
                        <td>
                          {food.foodNutrients.find(
                            (nutrient) =>
                              nutrient.name === "Carbohydrate, by difference"
                          )?.amount || "-"}{" "}
                          {food.foodNutrients.find(
                            (nutrient) =>
                              nutrient.name === "Carbohydrate, by difference"
                          )?.unitName || ""}
                        </td>
                        <td>
                          {food.foodNutrients.find(
                            (nutrient) =>
                              nutrient.name === "Fiber, total dietary"
                          )?.amount || "-"}{" "}
                          {food.foodNutrients.find(
                            (nutrient) =>
                              nutrient.name === "Fiber, total dietary"
                          )?.unitName || ""}
                        </td>
                        <td>
                          {food.foodNutrients.find(
                            (nutrient) =>
                              nutrient.name === "Sugars, total including NLEA"
                          )?.amount || "-"}{" "}
                          {food.foodNutrients.find(
                            (nutrient) =>
                              nutrient.name === "Sugars, total including NLEA"
                          )?.unitName || ""}
                        </td>
                        <td>
                          {food.foodNutrients.find(
                            (nutrient) => nutrient.name === "Phosphorus, P"
                          )?.amount || "-"}{" "}
                          {food.foodNutrients.find(
                            (nutrient) => nutrient.name === "Phosphorus, P"
                          )?.unitName || ""}
                        </td>
                        <td>
                          {food.foodNutrients.find(
                            (nutrient) => nutrient.name === "Sodium, Na"
                          )?.amount || "-"}{" "}
                          {food.foodNutrients.find(
                            (nutrient) => nutrient.name === "Sodium, Na"
                          )?.unitName || ""}
                        </td>
                        <td>
                          {food.foodNutrients.find(
                            (nutrient) => nutrient.name === "Potassium, K"
                          )?.amount || "-"}{" "}
                          {food.foodNutrients.find(
                            (nutrient) => nutrient.name === "Potassium, K"
                          )?.unitName || ""}
                        </td>

                        <button
                          class="btn-sm btn-outline-primary"
                          onClick={() => handleRowDelete(index)}
                        >
                          {" "}
                          <i class="fa fa-trash-alt"></i>{" "}
                        </button>
                      </tr>
                    ))}
                  </tbody>

                  <tfoot>
                    <th colSpan="0"> Subtotal </th>
                    <th>{calculateColumnSum("Calories")}G</th>
                    <th>{calculateColumnSum("Total lipid (fat)")}G</th>
                    <th>{calculateColumnSum("Protein")}</th>
                    <th>
                      {" "}
                      {calculateColumnSum("Carbohydrate, by difference")}G
                    </th>
                    <th> {calculateColumnSum("Theobromine")}G</th>
                    <th>
                      {" "}
                      {calculateColumnSum("Sugars, total including NLEA")}G
                    </th>
                    <th> {calculateColumnSum("Phosphorus, P")}MG</th>
                    <th> {calculateColumnSum("Sodium, Na")}MG</th>
                    <th> {calculateColumnSum("Potassium, K")}MG</th>
                  </tfoot>
                </table>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseFoods;
