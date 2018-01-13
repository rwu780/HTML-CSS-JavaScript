function nextPage(currentPage, pages){

	var i = pages.indexOf(currentPage);
	if (i == pages.length-1){
		// Current page is the last page.
	}
	else{
		document.getElementById(pages[i+1]).style.display = 'block';
		document.getElementById(pages[i]).style.display = 'none';
		currentPage = pages[i+1];
	}
	return currentPage;
}

function previousPage(currentPage, pages){
	var i = pages.indexOf(currentPage);
	if (i == 0){
		// Current page is the first page
		alert("This is the first page")

	}else{
		document.getElementById(pages[i-1]).style.display = 'block';
		document.getElementById(pages[i]).style.display = 'none';
		currentPage = pages[i-1];
	}
	return currentPage
}