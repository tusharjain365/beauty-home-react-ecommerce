export const getValues =(products, name)=>{
    let allTypes = products.map((product)=>product[name]);
    if(name === 'colors') {
        allTypes = allTypes.flat();
    }
    return ['all', ...new Set(allTypes)]
}
  