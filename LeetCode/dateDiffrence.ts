function dateDiffrence(date1:string,date2:string){
    const Date1 = new Date(date1);
    const Date2 = new Date(date2);
    
    const  Difference_In_Time =Math.abs(Date1.getTime() - Date2.getTime()); 
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    return Difference_In_Days
}
const date1 ="2023-9-8"
const date2 ="2022-5-6"
console.log(dateDiffrence(date1,date2));
