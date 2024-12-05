package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)



func CreateProduct(c *gin.Context) {
	type User struct {
		Name string `json:"name"` // Use uppercase for field names in structs
	}
	fmt.Println("The Endpoint is Hit")
	user := User{
		Name: "Nuredin Bedru", // Assign name correctly
	}

	// Send the user JSON response
	c.JSON(http.StatusOK, user)
}

func main() {
	// Initialize a Gin router
	router := gin.Default()

	// Define the route for creating a product
	router.POST("/create-product", CreateProduct)

	// Start the Gin server on port 8080
	router.Run(":8000")
}
