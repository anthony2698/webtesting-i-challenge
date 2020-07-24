module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
    return { 
        ...item, 
        enhancement: item.enhancement === 20 ? item.enhancement : item.enhancement + 1,
        durability: item.durability
        };
}

function fail(item) {
    return { 
        ...item,
        enhancement: item.enhancement >  16 ? item.enhancement - 1 : item.enhancement,
        durability: item.enhancement < 15 ? item.durability - 5 : item.durability - 10
        };
}

function repair(item) {
    return { 
        ...item, 
        durability: 100 
        };
}

function get(item) {
  return { ...item };
}
