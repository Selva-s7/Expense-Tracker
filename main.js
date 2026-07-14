const expenseAddBtn=document.querySelector(".addbtn");
const viewBtn=document.querySelector(".show_me_btn");
const Form=document.querySelector(".addToList");
const olist=document.querySelector(".Expense-list");
const viewchart=document.querySelector(".viewchart");
let count=parseFloat(localStorage.getItem("itemno"))||1;
    let expense=parseFloat(localStorage.getItem("expense"))||0;
Form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let uname=document.querySelector("#username").value;
    let Am=parseFloat(document.querySelector("#amount").value);
    let cat=document.querySelector("#category").value;
    uname.value=" ";
    Am.value=" ";
    cat.value=" ";
   // let expenseDetail=localStorage.getItem(`entry${count}`)||0;
    
    const exp_detail={
        name:uname,
        id:count,
        amount:Am,
        category:cat,
    };
    let lis=document.createElement("li");
    let xbtn=document.createElement("button");
    xbtn.textContent="x";
    //creating an ul for the list
    let innerul=document.createElement("ul");
    //Creating innerlist for inner ul 
    let innerliname=document.createElement("li");
    innerliname.textContent=uname;
    
    
    
    let innerliamount=document.createElement("li");
    innerliamount.textContent=Am;
    
    let innerlicat=document.createElement("li");
    innerlicat.textContent=cat;
    innerul.appendChild(innerliname);
    
    innerul.appendChild(innerliamount);
  
    innerul.appendChild(innerlicat);
    lis.appendChild(innerul);
    olist.appendChild(lis);
    xbtn.addEventListener("click",(e)=>{
        e.stopPropagation();
        lis.remove();
       localStorage.removeItem(`entry${exp_detail.id}`);
       expense-=exp_detail.amount;
       localStorage.setItem("expense",expense);
      showExpense()
       
    })
    lis.appendChild(xbtn);

    innerul.classList.add("format");
    expense+=Am;
    localStorage.setItem("expense",expense);
    localStorage.setItem(`entry${count}`,JSON.stringify(exp_detail));
    count++;
    showExpense();
   localStorage.setItem("itemno",count);
   seeChart();
  
});
function renderExpense()
{   localStorage.removeItem("id");
    for(let i=1;i<count;i++)
    {   
        let details=JSON.parse(localStorage.getItem(`entry${i}`));
        if (!details)
            continue;
        let rlis=document.createElement("li");
        let iul=document.createElement("ul");
        let li1=document.createElement("li");
        li1.textContent=details.name;

        

         let li3=document.createElement("li");
         li3.textContent=details.amount;

        let li4=document.createElement("li");
        li4.textContent=details.category;
        
        iul.appendChild(li1);
        
        iul.appendChild(li3);
        iul.appendChild(li4);
        iul.classList.add("format")
        rlis.appendChild(iul);

        let xbtn=document.createElement("button");
    xbtn.textContent="x";
    xbtn.addEventListener("click",(e)=>{
        e.stopPropagation();
        rlis.remove();
       localStorage.removeItem(`entry${details.id}`);
       expense-=details.amount;
       localStorage.setItem("expense",expense);
      seeChart();
      showExpense();

    })
    rlis.appendChild(xbtn);

        olist.appendChild(rlis);
    }
}
renderExpense();
function showExpense()
{
    const p=document.querySelector(".disp_exp");
  
   p.textContent=`EXPENSE IS:${localStorage.getItem("expense")}`;

}
viewBtn.addEventListener("click",showExpense);
const chartdata={
    FOOD:0,
    TRANSPORT:0,
    SHOPPING:0,
    BILLS:0,
    OTHER:0,
};

function seeChart()
{
    const noofItems=parseInt(localStorage.getItem("itemno"));
     Object.keys(chartdata).forEach(key => chartdata[key] = 0);
    for(let i=1;i<noofItems;i++)
    {
        const entry=JSON.parse(localStorage.getItem(`entry${i}`));
        if(!entry)
        {continue;}
       chartdata[entry['category']] = (chartdata[entry['category']] || 0) + entry.amount;
    }
    const exp_chart=document.querySelector("#myChart").getContext('2d');
    Chart.getChart("myChart")?.destroy();
    new Chart(exp_chart,{type:'pie',
        data:
        {
            labels:Object.keys(chartdata),
            datasets:[{
                label:"EXPENSES",
                data:Object.values(chartdata)
            }]
        },
        options:{
            scales:{
                y:{beginAtZero:true}
            }
        }
        
    }
);
}
viewchart.addEventListener("click",seeChart);
// DONE ALL  FINISHED