//Shannon Fano Pre-Processamento
const codes = {};

const shannonFanoFrequency = (data) => {
    var freq = {};
    var alf = [];

    for (var i = 0; i < data.length; i++) {
        var character = data.charAt(i);

        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
            alf.push(character);
        }
    }

    for (var i = 0; i < alf.length; i++) {
        freq[alf[i]] = +(freq[alf[i]] / data.length).toFixed(3);
    }

    var sorted = [];
    for (var char in freq)
        sorted.push([char, freq[char]]);

    sorted.sort(function (a, b) { return b[1] - a[1] });

    return sorted;
}

const buildtree = (tuples) => {
    tuples = ordernar([tuples[0]], tuples.slice(1, tuples.length));

    if (tuples[0].length > 2)
        tuples[0] = buildtree(tuples[0]);

    if (tuples[1].length > 2)
        tuples[1] = buildtree(tuples[1]);

    return tuples;
}

const ordernar = (left, right) => {
    let sumRight = 0;
    let sumLeft = 0;
    let tree;

    for (index in right)
        sumRight += right[index][1]

    for (index in left)
        sumLeft += left[index][1]

    sumLeft = +sumLeft.toFixed(3);
    sumRight = +sumRight.toFixed(3);

    if (sumRight > sumLeft) {
        left.push(right[0]);
        right = right.slice(1, right.length);

        tree = ordernar(left, right)
    } else {
        return [left, right]
    }

    return tree
}

//gerando o mapa de códigos
const assigncodes = (node, pat) => {
    pat = pat || "";

    if (typeof node == typeof "") {
        codes[node] = pat;
    } else {
        if(node) assigncodes(node[0], pat + "0");
        if(node) assigncodes(node[1], pat + "1");
    }
}

const encode = (str) => {
    var output = "";

    for (var ch in str)
        output = output + codes[str[ch]];

    return output
}

const decode = (tree, str) => {
    output = "";
    p = tree;

    for (var bit in str) {
        if (str[bit] == 0 && p[0][0])
            p = p[0]
        else if (str[bit] != 0 && p[1][0])
            p = p[1]

        if (typeof p == typeof "") {
            output = output + p
            p = tree
        }
    }

    return output
}
