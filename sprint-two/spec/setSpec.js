describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should not duplicate values in a set', function() {
    set.add('Bobby Bobberson');
    set.add('Harry Harrelson');
    set.add('Harry Harrelson');
    set.add('Harry Harrelson');
    expect(set.contains('Bobby Bobberson')).to.equal(true);
    expect(set.contains('Harry Harrelson')).to.equal(true);
    expect(Object.keys(set._storage)).to.have.lengthOf(2);
  })

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should assign key-value pairs like a real JS Set', function() {
    set.add('Peter Peterson');
    set.add('Jojo Jojorson');
    set.add('Ollie Ollerson');
    var keys = Object.keys(set._storage);
    var vals = Object.values(set._storage);
    var expectation = true;
    keys.forEach(function(key, idx) {
      if (key !== vals[idx]) {
        expectation = false;
      }
    });
    expect(expectation).to.equal(true);
  });

});
