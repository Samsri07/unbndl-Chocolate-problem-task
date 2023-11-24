const storeItems = [
    {
        chocalateImg: './chocolate images/chocolate-1.jpg',
        Price: '45',
        chocalateName: "Bounty",
        chocolateDes: "Thich choco bar filled with rich coconut."
    },
    {
        chocalateImg: './chocolate images/chocolate-2.jpg',
        Price: '75',
        chocalateName: "Mars",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-3.jpg',
        Price: '99',
        chocalateName: "Amul Bar",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-4.jpg',
        Price: '99',
        chocalateName: "Twix",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-5.jpg',
        Price: '130',
        chocalateName: "Dark chocolate",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-6.jpg',
        Price: '125',
        chocalateName: "Milk chocolate",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-7.jpg',
        Price: '175',
        chocalateName: "Ferero Rocher",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-8.jpg',
        Price: '20',
        chocalateName: "Milkybar",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-9.jpg',
        Price: '200',
        chocalateName: "Bournville",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-10.jpg',
        Price: '25',
        chocalateName: "Tourist",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-11.jpg',
        Price: '299',
        chocalateName: "Orange Rum Chocolate",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-12.jpg',
        Price: '150',
        chocalateName: "Country Bean Chocolate",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-13.jpg',
        Price: '75',
        chocalateName: "Silk Bubbly",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-14.jpg',
        Price: '15',
        chocalateName: "Milkybar",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-15.jpg',
        Price: '25',
        chocalateName: "Kit-Kat",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-16.jpg',
        Price: '100',
        chocalateName: "Munchies",
        chocolateDes: "Our newest addition."
    }, {
        chocalateImg: './chocolate images/chocolate-17.jpg',
        Price: '35',
        chocalateName: "Sweet Tooth",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-18.jpg',
        Price: '45',
        chocalateName: "Kinder Joy",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-19.jpg',
        Price: '50',
        chocalateName: "Snickers",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-20.jpg',
        Price: '169',
        chocalateName: "Oreo chocolate",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-21.jpg',
        Price: '275',
        chocalateName: "Toblerone",
        chocolateDes: "Our newest addition."
    },
    {
        chocalateImg: './chocolate images/chocolate-22.jpg',
        Price: '30',
        chocalateName: "Daily milk",
        chocolateDes: "Our newest addition."
    }
  

]

let arr = []


storeItems.forEach((item) => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item-div');
    itemDiv.style.height = "230px";
    itemDiv.style.width = "170px";
    itemDiv.style.background = "rgb(239, 239, 239)";


    let image = document.createElement('img')
    image.classList.add('image')
    image.style.height = "40%"
    image.style.width = "90%"
    image.style.borderRadius = '5px'
    image.src = item.chocalateImg


    let chocalateName = document.createElement('h3')
    chocalateName.classList.add('chocolate-name')
    chocalateName.innerText = item.chocalateName
    chocalateName.style.margin = '7px 0px'

   
    


    let Price = document.createElement('h2')
    Price.classList.add('chocolate-price')
    Price.style.width ="100%"
    Price.innerText = 'Rs.';
    Price.style.margin = '7px 0px'
    Price.style.display ='flex'
    Price.style.justifyContent ='center'
    Price.style.alignItems = 'center'


    let rs = document.createElement('h4')
    rs.innerText = `${item.Price}`;
    Price.append(rs)

    

    let AddCartBtn = document.createElement('button')
    AddCartBtn.classList.add('add-cart-btn')
    AddCartBtn.style.margin = '7px 0px'
    AddCartBtn.innerText = "Add to chocolate basket"


    AddCartBtn.addEventListener('click', (e) => {

      

        let sum = 0;
        let obj = {
            id: arr.length + 1,
            chocalateName: e.target.parentNode.childNodes[1].innerText,
            Price: e.target.parentNode.childNodes[2].lastElementChild.innerText,
        }
        
        arr.push(obj);

       

        document.querySelector('.total-cart-items').innerHTML = '';

        

        if (arr.length < 6) {
            arr.forEach((item) => {
                
                let eachCartItem = document.createElement('div');
                eachCartItem.classList.add("each-cart-item");
                eachCartItem.style.width = '90%';

                let sNo = document.createElement('h3')
                sNo.classList.add('s-no')
                sNo.innerText = item.id;


                let eachItemName = document.createElement('h3')
                eachItemName.classList.add("each-item-name");
                eachItemName.innerText = item.chocalateName;

                let eachItemPrice = document.createElement('h3')
                eachItemPrice.classList.add('each-item-price')
                eachItemPrice.innerText = `Rs. ${item.Price}`;

                
                eachCartItem.append(sNo)
                eachCartItem.append(eachItemName)
                eachCartItem.append(eachItemPrice)
                document.querySelector('.total-cart-items').append(eachCartItem)

            })
            updateAmount()
            
        }
        else if (arr.length == 6) {
            alert('We apologize. You cannot add more than 5 chocolates into your cart!')
            arr.length = 0;
        }
        
       

    })

    
    itemDiv.append(image)
    itemDiv.append(chocalateName)
    itemDiv.append(Price)
    itemDiv.append(AddCartBtn)
    document.querySelector('.store-items').append(itemDiv)
    
})

let totalAmount = 0; 


function updateAmount() {
    totalAmount = 0; 
    for (let i = 0; i < arr.length; i++) {
        // totalAmount += parseFloat();
        totalAmount += JSON.parse(arr[i].Price)
    }
    console.log(totalAmount)
    let totalPriceSpan = document.getElementById('totalPrice');
    totalPriceSpan.innerText = totalAmount.toFixed(2)
}



// 
