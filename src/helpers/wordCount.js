function wordCount(string){
    const myString =  string.split(' ');
    const num = myString.filter(word => word !== '').length;
    return Math.ceil(num / 100 * 0.3);
    // return myString.filter(word => word !== '').length;

}

export default wordCount;