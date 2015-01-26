var expect = require("chai").expect;
var _ = require("lodash");

describe("Partie de bowling", function() {
  
  it("peut faire une partie de merde", function() {
    var lances = nLancersAValeurFixe(20, 0);
        
    var score = scoreDe(lances);
  
    expect(score).to.equal(0);
  });
  
  it("peut faire une partie à un", function() {
    var lances = nLancersAValeurFixe(20, 1);
        
    var score = scoreDe(lances);
  
    expect(score).to.equal(20);
  });
  
  it("peut faire une partie avec lancé entre 0 et 9", function() {
    var lances = nLancersAValeurFixe(1,9)
      .concat(nLancersAValeurFixe(2, 1))
      .concat(nLancersAValeurFixe(17,0));
    
    var score = scoreDe(lances);
    
    expect(score).to.equal(12);
    
  });
    
  function nLancersAValeurFixe(nombre_lancer, valeurFixe) {
    return _.map(new Array(nombre_lancer), function() {
      return valeurFixe;
    });
  } 
});


function scoreDe(lances) {
  return _.reduce(_.chunk(lances, 2), scoreDuCarreau, 0);
  
  function scoreDuCarreau(accu, frame, indexFrame, frames) {
    var frame_sum = frame[0] + frame[1];
    if(estUnSpare(frame_sum)) {
      return accu + scoreDuSpare(frame, indexFrame, frames);
    }
    return accu + frame_sum;
}
  
  function scoreDuSpare(frame, indexFrame, frames) {
    return frames[indexFrame+1][0] + frame[0] + frame[1];
  }
  
  function estUnSpare(somme) {
    return somme == 10;
  }
} 

