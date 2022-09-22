const pdfBtn = document.getElementById("pdfBtn");
const language = document.getElementById("language");

const keys=["personalDescription" , "educationTitle"]

const dictionary=[
{
  key:"personalDescription",
  tr:"merhaba , ben afra",
  en:"hello , my afra"
},
{
  key:"educationTitle",
  tr:"projeler",
  en:"project"
}
]


pdfBtn.addEventListener("click",function () {
    const myCv = document.getElementById("myCv")
    var opt = {
        margin:       0,
        filename:     'LütfiyeAfra.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
      // New Promise-based usage:
      html2pdf().set(opt).from(myCv).save();
      
});

language.addEventListener("change" , function(e){
console.log(e.target.value)

})

