    app.get('/get-data', (req, res) => {
        res.json({
            categories: ["Category 1", "Category 2", "Category 3"],
            products: [
                { name: "Small box1", image: "1.jpg", description: "这是商品1的详细描述。", price: "$100", category: "Category 1" },
                { name: "Small box2", image: "2.jpg", description: "这是商品2的详细描述。", price: "$150", category: "Category 2" },
                { name: "Small box3", image: "3.jpg", description: "这是商品3的详细描述。", price: "$200", category: "Category 1" },
                { name: "Small box4", image: "4.jpg", description: "这是商品4的详细描述。", price: "$400", category: "Category 3" }
            ]
        });
    });
