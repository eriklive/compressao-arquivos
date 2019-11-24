const codes = {};

const frequency = (str) => {
    var freqs = {};
    for (var i in str) {
        if (freqs[str[i]] == undefined) {
            freqs[str[i]] = 1;
        }
        else {
            freqs[str[i]] = freqs[str[i]] + 1;
        }
    }

    return freqs;
}

const sortfreq = (freqs) => {
    var tuples = [];
    for (var let in freqs) {
        tuples.push([freqs[let], let]);
    }
    return tuples.sort();
}

const buildtree = (tuples) => {
    while (tuples.length > 1) {
        var leasttwo = [tuples[0][1], tuples[1][1]];
        var rest = tuples.slice(2, tuples.length);
        var combfreq = tuples[0][0] + tuples[1][0];

        tuples = rest;
        end = [combfreq, leasttwo];

        tuples.push(end)
        tuples.sort();
    }
    return tuples;
}

const trimtree = (tuples) => {
    return tuples[0][1];
}

const assigncodes = (node, pat) => {
    pat = pat || "";
    if (typeof node == typeof "") {
        codes[node] = pat;
    } else {
        assigncodes(node[0], pat + "0");
        assigncodes(node[1], pat + "1");
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

        if (str[bit] == 0) {
            p = p[0]
        }
        else {
            p = p[1]
        }
        if (typeof p == typeof "") {
            output = output + p
            p = tree
        }
    }
    
    return output
}
