export const createParagraph = (content) => {
  console.log(content);
  const main = document.getElementById("app");
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const h3Content = document.createTextNode(content.ingredientID);
  h3.appendChild(h3Content);
  const p = document.createElement("p");
  const pContent = document.createTextNode(content.ingredientContent);
  p.appendChild(pContent);
  const image = document.createElement("img");
  image.setAttribute("src", content.imageUrl);
  image.setAttribute("alt", "No Image");

  div.appendChild(h3);
  div.appendChild(image);
  div.appendChild(p);

  main.appendChild(div);
};

const INGREDIENT_IMAGE_URL =
  "https://www.themealdb.com/images/ingredients/Lime-Small.png";
const INGREDIENTS_URL =
  "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

//  First Fetching  all Ingredient And Image That Go With Ingredient

function fetchIngredientsInfo() {
  const firstPromise = fetch(INGREDIENTS_URL);
  firstPromise
    .then((response) => {
      response.json().then((data) => {
        let meals = data.meals.slice(1, 12);
        for (let i = 0; i < meals.length; i++) {
          const Name = meals[i].strIngredient;
          meals[
            i
          ].imageUrl = `https://www.themealdb.com/images/ingredients/${Name}.png`;
        }
        console.log(meals);

        handleCreatingParagraph(meals);
      });
    })
    .catch((err) => {
      console.log("Error Handle : ", err);
    });
}

function handleCreatingParagraph(ingredients) {
  ingredients.map((ingredient, index) => {
    const content = {
      ingredientID: ingredient.strIngredient,
      ingredientContent: ingredient.strDescription,
      imageUrl: ingredient.imageUrl,
    };
    createParagraph(content);
  });
}
fetchIngredientsInfo();
