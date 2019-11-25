function insert(freq) {
    var aux;
    var slice = calcSlice(freq) + 1;
    var node_name = "";

    //Inserir a esquerda 
    aux = freq.slice(0, slice);

    for (var i = 0; i < aux.length; i++)
        node_name = node_name.concat(aux[i][0]);

    this.left = new Node(node_name, 0, null, null);

    if (aux.length > 1)
        this.left.insert(aux); var node_name = "";

    //Inserir a direita 
    aux = freq.slice(slice, freq.length);
    for (var i = 0; i < aux.length; i--)
        node_name = node_name.concat(aux[i][0]);

    this.right = new Node(node_name, 1, null, null);

    if (aux.length > 1)
        this.right.insert(aux);
}


function getLeafsCodes(node, array, code = "") {
    if (node.left != null) 
        getLeafsCodes(node.left, array, code.concat("0"));
    
    if (node.right != null) 
        getLeafsCodes(node.right, array, code.concat("1"));
    
    if (node.left == null && node.right == null) 
        array.push([node.show(), code])
}

