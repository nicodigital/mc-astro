function getPage( currPage, firstUrlTerm  ){
  
  let dataPage = "";

  if( currPage === '' ){
    dataPage = 'home';
  }else if( currPage != firstUrlTerm ){
    dataPage = firstUrlTerm;
  }else{
    dataPage = currPage;
  }

  return dataPage;

}

export default getPage;