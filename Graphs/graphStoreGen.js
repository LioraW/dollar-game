const tutorial_graph = [
    { X: 0, Y: 17.5, connections: [2,4], value: 1 },
    { X: -20, Y: 2.5, connections: [2], value: -1 },
    { X: 15, Y: 2.5, connections: [0,1,4], value: -2 },
    { X: -20, Y: -17.5, connections: [4], value: 2 },
    { X: 0, Y: -17.5, connections: [0,2,3], value: 3 }
];

const flower_graph = [
    { X: 0, Y: 60, connections:[1,2] }, // 0
    { X: -20, Y: 30, connections: [0,6] }, // 1
    { X: 20, Y: 30, connections: [0,6] }, // 2
    { X: -30, Y: 20, connections: [5,6] }, // 3
    { X: 30, Y: 20,  connections: [6,7] }, // 4
    { X: -60, Y: 0, connections: [3,8] }, // 5
    { X: 0,  Y: 0, connections: [1,2] }, // 6
    { X: 60, Y: 0, connections: [4,9] }, // 7
    { X: -30, Y: -20, connections: [5,6] }, // 8
    { X: 30, Y: -20, connections: [6,7] }, // 9
    { X: -20,Y: -30, connections: [6,12] }, // 10
    { X: 20, Y: -30, connections: [6,12] }, // 11
    { X: 0, Y: -60, connections: [10,11] }, // 12
];
const example_graph_1 = [
    { X: -20, Y: 2.5, connections: [1], value: -1 },
    { X: 15, Y: 2.5, connections: [0,2], value: -4 },
    { X: -20, Y: -17.5, connections: [1], value: 8 },
];
const example_graph_2 = [
    { X: -20, Y: 4.5, connections: [1], value: -1 },
    { X: 15, Y: 4.5, connections: [0,2], value: -4 },
    { X: -20, Y: -34.5, connections: [1], value: 8 },
];