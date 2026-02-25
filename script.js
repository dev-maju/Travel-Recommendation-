function searchRecommendation() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    if (input.includes("beach")) {
        document.getElementById("beach").scrollIntoView();
    } else if (input.includes("temple")) {
        document.getElementById("temple").scrollIntoView();
    } else if (input.includes("japan") || input.includes("country")) {
        document.getElementById("country").scrollIntoView();
    } else {
        alert("No recommendation found.");
    }
}

function resetSearch() {
    document.getElementById("searchInput").value = "";
    window.scrollTo(0, 0);
}
