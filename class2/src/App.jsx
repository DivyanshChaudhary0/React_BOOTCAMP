
import Card from './Components/Card';

function App() {

  const data = [
    {
      "id": 1,
      "name": "Wireless Earbuds",
      "image": "https://images.unsplash.com/photo-1648447272271-1c2292144c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
      "price": 49.99,
      "description": "High-quality wireless earbuds with noise cancellation and long battery life.",
      "rating": 4.5,
      "reviews": 128,
      "availability": "In Stock",
      "category": "Electronics",
      "callToAction": "Buy Now"
    },
    {
      "id": 2,
      "name": "Smartphone",
      "image": "https://images.unsplash.com/photo-1502096472573-eaac515392c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D",
      "price": 699.00,
      "description": "Latest 5G smartphone with a stunning display and advanced camera features.",
      "rating": 4.8,
      "reviews": 512,
      "availability": "In Stock",
      "category": "Mobile Phones",
      "callToAction": "Add to Cart"
    },
    {
      "id": 3,
      "name": "Gaming Laptop",
      "image": "https://media.istockphoto.com/id/1452281128/photo/laptop-blank-screen-on-wood-table-with-coffee-cafe-background-mockup-template-for-your-text.webp?a=1&b=1&s=612x612&w=0&k=20&c=df8go6RBC5b7Wl2iZQ42W7Tn7HhmbaUYfCZJimOxiVQ=",
      "price": 1199.99,
      "description": "Powerful gaming laptop with high-performance graphics and fast refresh rate.",
      "rating": 4.6,
      "reviews": 230,
      "availability": "Limited Stock",
      "category": "Computers",
      "callToAction": "Shop Now"
    },
    {
      "id": 4,
      "name": "Fitness Tracker",
      "image": "https://plus.unsplash.com/premium_photo-1681433386259-1ea114ca923d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpdG5lc3MlMjB0cmFja2VyfGVufDB8fDB8fHww",
      "price": 79.99,
      "description": "Track your fitness goals with this lightweight and waterproof fitness tracker.",
      "rating": 4.3,
      "reviews": 150,
      "availability": "In Stock",
      "category": "Health & Fitness",
      "callToAction": "Buy Now"
    },
  ]
  

  return (
    <div className='w-full min-h-screen flex items-start justify-evenly gap-6 flex-wrap px-20 py-10 bg-gray-200'>
      {
        data.map(function(elem){
          return (
          <Card data={elem}/>
          )
        })
      }

    </div>
  )
}

export default App;