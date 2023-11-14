let libraryButton = document.querySelector(".createLibrary");
let sidePanel = document.querySelector("#containerSideBarOpen");
let icon = document.querySelector("#icon");
let submit = document.querySelector("#submit");
let form = document.querySelector("#myForm");
let Yes = "";
let No = ""

// Get the Yes and No checkboxes
const yesCheckbox = document.querySelector(".Yes_toggle");
const noCheckbox = document.querySelector(".No_toggle");

// Add event listeners to both checkboxes
yesCheckbox.addEventListener("change", function () {
    if (yesCheckbox.checked) {
        // If "Yes" is checked, uncheck "No"
        noCheckbox.checked = false;
        Yes = "Yes";
        No = null;
    } 
});

noCheckbox.addEventListener("change", function () {
    if (noCheckbox.checked) {
        // If "No" is checked, uncheck "Yes"
        yesCheckbox.checked = false;
        No = "No";
        Yes = null;
    }
});

function sideBarOpen () {
    libraryButton.addEventListener("click", function () {
        sidePanel.style.visibility = "visible";
       
    });
};

sideBarOpen();

function sideBarClose () {
    submit.addEventListener("click", function () {
        sidePanel.style.visibility = "hidden";
    }
    
)};

sideBarClose();

const myLibrary = [];

let table = document.getElementById("table"); 
const buttons = document.querySelectorAll('button');

function createLibraryTable() {
 
    for (let i=myLibrary.length-1; i < myLibrary.length; i++) {
        let newRow = table.insertRow();
  
        Object.keys(myLibrary[i]).forEach((property) => {
          let newCell = newRow.insertCell();
          newCell.innerText = myLibrary[i][property];
        });

        (function (index) {
  
            let readButton = document.createElement("button");
            readButton.innerText = "Change Read Status";
            newRow.insertCell().appendChild(readButton);
  
            // The event listener remains unchanged
             readButton.addEventListener('click', function(inddex) {
             // Toggle the "Read" status for the book
            myLibrary[i].toggleRead();
             // Update the cell with the new value
            newRow.cells[3].innerText = myLibrary[i].read;
            });
     
         })(i);;
    
    };

};
  
buttons.forEach((button) => {

    buttons.forEach(function(button, index) {
        if (index < myLibrary.length) {
          button.setAttribute('data-info', myLibrary[index].Book);
          button.addEventListener('click', function() {
            myLibrary[index].Book.toggleRead(index);
          });
        }
      });
});



class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }

    toggleRead() {
        if (this.read === "Yes") {
            this.read = "No";
        } else {
            this.read = "Yes";
        };
    };
};

let bookCounter = 1; // Initialize a counter for book IDs


function bookInstance() {
    let bookArry = [];

bookArry[0] = document.getElementById("userInput1").value;
bookArry[1] = document.getElementById("userInput2").value;
bookArry[2] = document.getElementById("userInput3").value;

    if (Yes === "Yes") {
        bookArry[3] = "Yes";
    } else {
        bookArry[3] = "No";
    };

let bookName = `Book ${bookCounter}`; // Generate a unique book name
myLibrary.push(new Book(bookArry[0], bookArry[1], bookArry[2], bookArry[3])); //*Change CODE*
console.log(myLibrary);
bookCounter++; // Increment the counter for the next book

};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    bookInstance();
    createLibraryTable();
    form.reset();
});




