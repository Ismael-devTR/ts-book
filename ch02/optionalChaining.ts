type objectA = {
  nestedProperty: {
    name: string;
  };
};
var objectA = {
  nestedProperty: {
    name: "Nested property name",
  },
};

function printNestedObject(obj: objectA) {
  console.log(`obj.nestedProperty.name = ${obj.nestedProperty.name}`);
}

printNestedObject(objectA);
