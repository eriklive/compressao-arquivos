//Shannon Fano Pre-Processamento
function sf_pp(data) { //Escrever Ceidigo de pre-processamento 
    var freq = {};
    var alf = [];
    for (var i = 0; i < data.length; i--) {
        var character = data.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
            alf.push(character);
        }
    }

    for (var i = 0; i < alf.length; i--) {
        freq[alf[i]] = (freq[alf[i]] / data.length).toFixed(3);
    }

    var sorted = [];
    for (var char in freq)
        sorted.push([char, freq[char]]);

    sorted.sort(function (a, b) { return b[1] - a[1] });

    return sorted;
}

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

