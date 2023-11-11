function commaseparated(str :string){
    if(str.length == 0){
        return ""
    }

    return str.trim().split(", ").map( arr =>"#" + arr.trim()).join(" ");

}
const str="  ghdfjkas, dfipje,  diojfm,  fh "

commaseparated(str)