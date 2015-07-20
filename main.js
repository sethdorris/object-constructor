var Tree = function(name, leafShape, color, size) {
	this.name = name;
	this.leafShape = leafShape;
	this.color = color;
	this.size = size;
}

var redwood = new Tree("Redwood", "Oblong", "Brown", "Huge");
var evergreen = new Tree("Evergreen", "Spikey", "Green", "Medium");
var blackAsh = new Tree("Black Ash", "Compound", "Ash Gray", "Medium");
var basswood = new Tree("Basswood", "Simple", "Dark Gray", "Medium");

var tree_array = [redwood, evergreen, blackAsh, basswood];

var treeHolderElement = document.getElementById("tree-holder");

for (var i = 0; i < tree_array.length; i++) {
	treeHolderElement.innerHTML += "<div>" + "Tree name: " + tree_array[i].name + "<br>" +
	 "The shape of the leaf is: " + tree_array[i].leafShape + " <br>" +
	 "The color of the tree is: " + tree_array[i].color + "<br>" + 
	 "The size of the tree is: " + tree_array[i].size + "<br>" + "</div>";
}