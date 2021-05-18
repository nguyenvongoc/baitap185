var ngay=+prompt("Nhap ngay : ");
if(ngay>31)
{
    ngay =+prompt("Nhap lai ngay :");
}
var thang=+prompt("Nhap thang : ");
if(thang>12)
{
     thang =+prompt("Nhap lai thang :");
}
if(thang==2)
    if(ngay>28)
    {
        ngay =+prompt("Nhap lai ngay :")
    }
let nam=+prompt("Nhap nam : ");
document.write(ngay+"-"+thang+"-"+nam);