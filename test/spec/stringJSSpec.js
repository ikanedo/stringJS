
describe("String", function () {

    beforeEach(function () {
        
    });

    describe("on trim", function () {
        it("should remove all trailing spaces", function () {
            
			var space = "    space     ".trim();
			
			expect(space).toBe("space");
			
        });

    });
	
	describe("on format", function(){
		it("should replace all indexes with arguments passed", function(){
			var sentence = "The {0} brown {1} jumped over the lazy {2}".format("big", "fox", "dog");
			var sentence2 = "The {0} brown {1} jumped over the lazy {2}".format("big", "fox");
			var sentence3 = "The {0} brown {1} jumped over the lazy {2}".format("big", "fox", "dog", "cat");
			
			expect(sentence).toBe("The big brown fox jumped over the lazy dog");
			expect(sentence2).toBe("The big brown fox jumped over the lazy {2}");
			expect(sentence3).toBe("The big brown fox jumped over the lazy dog");

		});
	});
	
	describe("when parsing as integer", function(){
		it("should parse as integer", function(){
			var num = "2em".toInt();
			
			expect(num).toBe(2);
		});
		
		it("should return passed argument if the parsing fails and an argument is passed", function(){
			var num = "NAN".toInt(2);
			
			expect(num).toBe(2);
		});
		
		it("should return zero if the parsing fails and no argument is passed", function(){
			var num = "NAN".toInt();
			
			expect(num).toBe(0);
		});
	});

});