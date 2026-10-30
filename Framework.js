function findLaptop() {
    const budgetEl = document.querySelector('input[name="budget"]:checked');
    const budget = budgetEl ? budgetEl.value : "not-sure";
    const uses = [...document.querySelectorAll('input[name="use"]:checked')].map((e) => e.value);

    if (uses.length === 0) {
        alert("Pick at least one use");
        return;
    }

    const hasGaming = uses.includes("gaming");
    const hasCoding = uses.includes("coding");
    const hasEditing = uses.includes("editing");
    const hasSchool = uses.includes("school");

    let finalModel = "Framework Laptop 12";
    

    if (hasGaming || hasEditing) {
        finalModel = "Framework Laptop 16";
        
    } 
    else if (hasGaming && hasSchool) {
        finalModel = "Framework Laptop 13";
        
    }
    else if (hasCoding && hasSchool) {
        finalModel = "Framework Laptop 13";
       
    } else if (hasSchool) {
        finalModel = "Framework Laptop 12";
       
    } else if (hasCoding) {
        finalModel = "Framework Laptop 13";
        
    }

    if (budget === "low") {
        if (finalModel === "Framework Laptop 16") {
            finalModel = "Framework Laptop 13";
            reason = "You want strong performance, but a lower budget makes the 13-inch model the smarter choice.";
        } else if (finalModel === "Framework Laptop 13") {
            finalModel = "Framework Laptop 12";
            reason = "A low budget makes the 12-inch model the most affordable option with enough capability.";
        } else {
            finalModel = "Framework Laptop 12";
            reason = "Low budget means the entry-level model gives the best value.";
        }
    } else if (budget === "medium") {
        if (finalModel === "Framework Laptop 16") {
            reason += " Medium budget still gives you a very capable option.";
        } else if (finalModel === "Framework Laptop 13") {
            reason += " Medium budget gives you a balanced choice for performance and value.";
        } else {
            reason += " Medium budget keeps this model practical and affordable.";
        }
    } else if (budget === "high") {
        if (hasGaming || hasEditing) {
            finalModel = "Framework Laptop 16";
            reason = "Great for gaming and editing, and a high budget lets you choose the top-performance option.";
        } else {
            finalModel = "Framework Laptop 13";
            reason = "A high budget lets you choose a more powerful model with extra headroom.";
        }
    } else if (budget === "not-sure") {
        reason += " Budget not selected, so the recommendation is based mainly on your use case.";
    }

    document.getElementById("result").innerHTML =
        "<h3>Recommended: " + finalModel + "</h3>" +
        "<p><b>Uses picked:</b> " + uses.join(", ") + "</p>";
}