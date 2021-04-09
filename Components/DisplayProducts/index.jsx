import React from 'react';
import CardCustomized from '../CardCustomized/'
import Grid from '@material-ui/core/Grid';
const displayProducts = (props) => {
    const items = [{
        "_id": "5b9cc623b92b7341a4ea1335",
        "Title": "Cretta 10 seat Sofa",
        "Description": "Amazing Sofa by Cretta",
        "amount": 56000,
        "Category": "Sofa",
        "Colour": "White",
        "Material": "Fabric",
        "Weight": "56",
        "Dimension": "90X9X89",
        "Image": "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa2.jpeg?alt=media&token=adf6c9a5-c3ec-4e83-83e4-2c5fcd04bf1d",
        "SellerId": "5b9a06002934160710dde327",
        "sellerName": "Seller Name",
        "Quantity": 4,
        "IsAdmin": false,
        "__v": 0
    },
    {
        "_id": "5b9cc623b92b7341a4ea1335",
        "Title": "Cretta 10 seat Sofa",
        "Description": "Amazing Sofa by Cretta",
        "amount": 56000,
        "Category": "Sofa",
        "Colour": "White",
        "Material": "Fabric",
        "Weight": "56",
        "Dimension": "90X9X89",
        "Image": "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa2.jpeg?alt=media&token=adf6c9a5-c3ec-4e83-83e4-2c5fcd04bf1d",
        "SellerId": "5b9a06002934160710dde327",
        "sellerName": "Seller Name",
        "Quantity": 4,
        "IsAdmin": false,
        "__v": 0
    },
    {
        "_id": "5b9cc623b92b7341a4ea1335",
        "Title": "Cretta 10 seat Sofa",
        "Description": "Amazing Sofa by Cretta",
        "amount": 56000,
        "Category": "Sofa",
        "Colour": "White",
        "Material": "Fabric",
        "Weight": "56",
        "Dimension": "90X9X89",
        "Image": "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa2.jpeg?alt=media&token=adf6c9a5-c3ec-4e83-83e4-2c5fcd04bf1d",
        "SellerId": "5b9a06002934160710dde327",
        "sellerName": "Seller Name",
        "Quantity": 4,
        "IsAdmin": false,
        "__v": 0
    },
    {
        "_id": "5b9cc623b92b7341a4ea1335",
        "Title": "Cretta 10 seat Sofa",
        "Description": "Amazing Sofa by Cretta",
        "amount": 56000,
        "Category": "Sofa",
        "Colour": "White",
        "Material": "Fabric",
        "Weight": "56",
        "Dimension": "90X9X89",
        "Image": "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa2.jpeg?alt=media&token=adf6c9a5-c3ec-4e83-83e4-2c5fcd04bf1d",
        "SellerId": "5b9a06002934160710dde327",
        "sellerName": "Seller Name",
        "Quantity": 4,
        "IsAdmin": false,
        "__v": 0
    },
    {
        "_id": "5b9cc623b92b7341a4ea1335",
        "Title": "Cretta 10 seat Sofa",
        "Description": "Amazing Sofa by Cretta",
        "amount": 56000,
        "Category": "Sofa",
        "Colour": "White",
        "Material": "Fabric",
        "Weight": "56",
        "Dimension": "90X9X89",
        "Image": "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa2.jpeg?alt=media&token=adf6c9a5-c3ec-4e83-83e4-2c5fcd04bf1d",
        "SellerId": "5b9a06002934160710dde327",
        "sellerName": "Seller Name",
        "Quantity": 4,
        "IsAdmin": false,
        "__v": 0
    },
    {
        "_id": "5b9cc623b92b7341a4ea1335",
        "Title": "Cretta 10 seat Sofa",
        "Description": "Amazing Sofa by Cretta",
        "amount": 56000,
        "Category": "Sofa",
        "Colour": "White",
        "Material": "Fabric",
        "Weight": "56",
        "Dimension": "90X9X89",
        "Image": "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa2.jpeg?alt=media&token=adf6c9a5-c3ec-4e83-83e4-2c5fcd04bf1d",
        "SellerId": "5b9a06002934160710dde327",
        "sellerName": "Seller Name",
        "Quantity": 4,
        "IsAdmin": false,
        "__v": 0
    },
    {
        "_id": "5b9cc623b92b7341a4ea1335",
        "Title": "Cretta 10 seat Sofa",
        "Description": "Amazing Sofa by Cretta",
        "amount": 56000,
        "Category": "Sofa",
        "Colour": "White",
        "Material": "Fabric",
        "Weight": "56",
        "Dimension": "90X9X89",
        "Image": "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa2.jpeg?alt=media&token=adf6c9a5-c3ec-4e83-83e4-2c5fcd04bf1d",
        "SellerId": "5b9a06002934160710dde327",
        "sellerName": "Seller Name",
        "Quantity": 4,
        "IsAdmin": false,
        "__v": 0
    }]
    const actions =
        [
            {
                actionTitle: "View Product",
                color: "primary",
                actionCallback: () => {
                    alert("hello");
                }
            }
        ]

    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={16}>
            {items.map((item) => {
                return (
                    <Grid item sm={3} xs={12}>
                        <CardCustomized product={item} actions={[
                            {
                                actionTitle: "View Product",
                                color: "primary",
                                actionCallback: () => {
                                    alert(item.Title);
                                }
                            }
                        ]}
                        />
                    </Grid>
                )
            })}

        </Grid>
    )
}
export default displayProducts;