// For graph.js:

//for logging the node id's and their connections
var nodeIds = {};
var nodePositions = {};
this.nodes.forEach((node) => {
    let connIds = []
    node.connections.forEach((connection) => { connIds.push(connection.get_id())});
    nodeIds[node.get_id()] = connIds;
});
this.nodes.forEach((node) => {
    nodePositions[node.get_id()] = [node.get_x(), node.get_y()];
});
console.log(nodeIds);
console.log(nodePositions);

//***********************************************
function easyGraph () {
    let preMadeNodes = {
        0: {
            connectionIds: [4],
            position: [483.4994132017314, 649.956858201715],
            amount: -6,
        },
        1: {
            connectionIds: [2, 3],
            position: [1033.3539681669722, 290.38739181671025],
            amount: -4,
        },
        2: {
            connectionIds: [1, 3],
            position: [965.4293975357643, 418.7786454334634],
            amount: -4,
        },
        3: {
            connectionIds: [1, 2, 4],
            position: [822.1204258331383, 418.9790135476179],
            amount: 8,
        },
        4: {
            connectionIds: [0, 3],
            position: [481.07923923514943, 292.21646799315266],
            amount: 6,
        }

    }
}