(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A70BC").s().p("EgAsAlIIAAgIQgFhyACitQADjAAAhgMAAAhBIQAAgsAsAAQAtAAAAAsIAAAIQAFBygCCtIgDEgMAAABBIQAAAsgtAAQgsgBAAgrg");
	this.shape.setTransform(54.9,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A70BC").s().p("AvmPnQgfggAegfIeP+PQAfgeAgAfQAgAggfAfI+PePQgPAPgQAAQgQAAgQgQg");
	this.shape_1.setTransform(68.6,168.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A70BC").s().p("Ay1TwQgWgCgRgQQgSgSgBgWQgCgYATgUMAloglnQATgUAZACQAWACARAQQARASACAWQACAYgTAUMgloAlnQgRASgWAAIgFAAg");
	this.shape_2.setTransform(331.8,193.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A70BC").s().p("ARrSqMgkVgkUQgegfAgggQAggfAeAeMAkUAkUQAfAfggAgQgQARgQAAQgPAAgPgQg");
	this.shape_3.setTransform(281.5,188.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A70BC").s().p("EAiEAjYIgIgHQhvhpihikIkNkQMg82g83QgUgTACgZQACgWARgRQARgRAWgCQAZgCATAUIAIAHQBuBoCiClIENEQMA82A82QAUAUgCAYQgCAXgRARQgSARgVACIgFAAQgWAAgRgSg");
	this.shape_4.setTransform(169.8,-91.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A70BC").s().p("EgrbAsWQgWgCgSgRQgRgRgCgWQgCgZAUgTIAJgJQAqgsBChBMBU/hU+QAUgUAYADQAWABASARQARARACAWQACAZgUAUIgJAJQgqAshBBBMhVABU+QgSASgWAAIgEgBg");
	this.shape_5.setTransform(-174.3,25.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A70BC").s().p("AGAGqIspsoQgUgVAVgVQAVgVAUAUIMpMpQAUAUgVAVQgLALgKAAQgKAAgKgKg");
	this.shape_6.setTransform(-68.7,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A70BC").s().p("A0DU+QgXgBgRgSQgRgQgCgXQgCgYAUgUIAEgEQA8hBBehcICeibMAjIgjIQAUgTAYACQAWABASARQARASACAVQACAZgUATIgEAFQg8BBheBcIieCaMgjIAjJQgSASgWAAIgEgBg");
	this.shape_7.setTransform(66.8,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-458.2,-319.8,916.5,639.7);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A70BC").s().p("EgAsAlIIAAgIQgFhyACitQADjAAAhgMAAAhBIQAAgsAsAAQAtAAAAAsIAAAIQAFBygCCtIgDEgMAAABBIQAAAsgtAAQgsgBAAgrg");
	this.shape.setTransform(54.9,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A70BC").s().p("AvmPnQgfggAegfIeP+PQAfgeAgAfQAgAggfAfI+PePQgPAPgQAAQgQAAgQgQg");
	this.shape_1.setTransform(68.6,168.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A70BC").s().p("Ay1TwQgWgCgRgQQgSgSgBgWQgCgYATgUMAloglnQATgUAZACQAWACARAQQARASACAWQACAYgTAUMgloAlnQgRASgWAAIgFAAg");
	this.shape_2.setTransform(331.8,193.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A70BC").s().p("ARrSqMgkVgkUQgegfAgggQAggfAeAeMAkUAkUQAfAfggAgQgQARgQAAQgPAAgPgQg");
	this.shape_3.setTransform(281.5,188.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A70BC").s().p("EAiEAjYIgIgHQhvhpihikIkNkQMg82g83QgUgTACgZQACgWARgRQARgRAWgCQAZgCATAUIAIAHQBuBoCiClIENEQMA82A82QAUAUgCAYQgCAXgRARQgSARgVACIgFAAQgWAAgRgSg");
	this.shape_4.setTransform(169.8,-91.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A70BC").s().p("EgrbAsWQgWgCgSgRQgRgRgCgWQgCgZAUgTIAJgJQAqgsBChBMBU/hU+QAUgUAYADQAWABASARQARARACAWQACAZgUAUIgJAJQgqAshBBBMhVABU+QgSASgWAAIgEgBg");
	this.shape_5.setTransform(-174.3,25.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A70BC").s().p("AGAGqIspsoQgUgVAVgVQAVgVAUAUIMpMpQAUAUgVAVQgLALgKAAQgKAAgKgKg");
	this.shape_6.setTransform(-68.7,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A70BC").s().p("A0DU+QgXgBgRgSQgRgQgCgXQgCgYAUgUIAEgEQA8hBBehcICeibMAjIgjIQAUgTAYACQAWABASARQARASACAVQACAZgUATIgEAFQg8BBheBcIieCaMgjIAjJQgSASgWAAIgEgBg");
	this.shape_7.setTransform(66.8,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-458.2,-319.8,916.5,639.7);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A70BC").s().p("EgAsAlIIAAgIQgFhyACitQADjAAAhgMAAAhBIQAAgsAsAAQAtAAAAAsIAAAIQAFBygCCtIgDEgMAAABBIQAAAsgtAAQgsgBAAgrg");
	this.shape.setTransform(54.9,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A70BC").s().p("AvmPnQgfggAegfIeP+PQAfgeAgAfQAgAggfAfI+PePQgPAPgQAAQgQAAgQgQg");
	this.shape_1.setTransform(68.6,168.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A70BC").s().p("Ay1TwQgWgCgRgQQgSgSgBgWQgCgYATgUMAloglnQATgUAZACQAWACARAQQARASACAWQACAYgTAUMgloAlnQgRASgWAAIgFAAg");
	this.shape_2.setTransform(331.8,193.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A70BC").s().p("ARrSqMgkVgkUQgegfAgggQAggfAeAeMAkUAkUQAfAfggAgQgQARgQAAQgPAAgPgQg");
	this.shape_3.setTransform(281.5,188.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A70BC").s().p("EAiEAjYIgIgHQhvhpihikIkNkQMg82g83QgUgTACgZQACgWARgRQARgRAWgCQAZgCATAUIAIAHQBuBoCiClIENEQMA82A82QAUAUgCAYQgCAXgRARQgSARgVACIgFAAQgWAAgRgSg");
	this.shape_4.setTransform(169.8,-91.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A70BC").s().p("EgrbAsWQgWgCgSgRQgRgRgCgWQgCgZAUgTIAJgJQAqgsBChBMBU/hU+QAUgUAYADQAWABASARQARARACAWQACAZgUAUIgJAJQgqAshBBBMhVABU+QgSASgWAAIgEgBg");
	this.shape_5.setTransform(-174.3,25.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A70BC").s().p("AGAGqIspsoQgUgVAVgVQAVgVAUAUIMpMpQAUAUgVAVQgLALgKAAQgKAAgKgKg");
	this.shape_6.setTransform(-68.7,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A70BC").s().p("A0DU+QgXgBgRgSQgRgQgCgXQgCgYAUgUIAEgEQA8hBBehcICeibMAjIgjIQAUgTAYACQAWABASARQARASACAVQACAZgUATIgEAFQg8BBheBcIieCaMgjIAjJQgSASgWAAIgEgBg");
	this.shape_7.setTransform(66.8,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-458.2,-319.8,916.5,639.7);


(lib.Turquoise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3AAA9E").s().p("EBedBXeIgJgJQgsgqhBhCIhshtI5V5VIjKDJQgeAfggggQggggAegfIAFgEQAUgXAhggIA3g1IBZhZIununIm9G9QgUAVgWgVQgVgVAVgVIG9m9Mgp9gp9QgTgTACgYQABgWASgRQARgRAWgCQAZgCATATIAJAKQBKBFCPCSMAmbAmbIIZoZQAUgUAVAVQAWAVgVAUIoZIZIOnOnIMVsVItLtKIgJAAQgWgCgRgRQgSgSgBgWQgCgYATgUMAjNgjLQATgUAZACQAWACARARIAJALQBHBBBmBoICsCwMAnCAnBQATATgCAZQgBAWgRARQgSARgWACQgYACgUgUIgFgEQhIhDhohqQhyh1g6g6MgmZgmYIw3Q2QBNBJBmBnIDNDSIHAHAIIFoFQAfgeAgAfQAgAggfAfIgFAFQgUAWghAgIg2A1ImVGVMAm4Am4QATATgCAZQgBAWgRARQgSARgWACQgZACgTgTIgGgGQhWhRh7h8QiIiNhFhFMggUggTIvtPtII8I9QAfAfggAfQgfAggfgfIo9o8IsUMVIc3c3QAUAUgCAYQgCAXgRARQgSARgWACIgEAAQgWAAgSgSgEBCOAd8INBNCIPuvuItCtBgEiceA0BIuCuBIoqIqQgVAUgVgVQgVgVAVgVIIqoqIkhkgIs/M/QgTATgZgCQgWgBgRgRQgSgSgBgWQgCgYATgUIQfweIsWsWQgUgUACgYQACgWARgSQASgRAWgCQAYgCAUAUIMWMWIDqjrQATgTAXABIANgCQAZgCATATIFGFGIA7g8QAVgVAVAVQAVAWgUAUIg8A8IQMQMQATATgCAZQgBAWgSARQgRARgWACQgZACgTgUIwMwLIm9G9IOBOCQAfAfggAfQgQARgPAAQgQAAgPgQgEiurAf1IEhEhIG9m+IkhkgIjIDJIDFDFQAUAUgCAYQgCAXgRARQgRARgXACQgYACgUgUIjFjFgECtjAIpIgGgGQgcgYgmgoIhBhCMgxzgxyQgegfAgggQAggfAeAeIAGAGQAbAYAnAoIBABCMAxzAxyQAfAfggAgQgQARgPAAQgQAAgPgQgEC7EgKjIgIgIQh2hxirisQi9jBhfhgMg5gg5fInanaQgngnAEgxQADgsAjgjQAigiAtgEQAxgDAnAmIAIAIQB1BwCrCtIEdEgMBA6BA6QAnAngEAxQgEAsgiAjQgjAigsAEIgIAAQgsAAgkgjg");
	this.shape.setTransform(1217.7,561.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2435.5,1123.2);


(lib.spring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50B64F").s().p("EDNbBQoMiD6iD4Mg+GA+FIYBYCQAUATgCAZQgCAWgRARQgRARgWACQgZACgTgTI4C4CIzyTyQgTAUgZgCQgWgCgRgRQgRgRgCgXQgCgYATgUIALgKQAwgyBLhKMBRHhRGIv1v1QgngnAEgxQADgsAigjQAjgiAsgEQAygDAmAmIM2M2IBnhoIljljQgegeAfggQAgggAfAfIFjFjIGQmQQAfgfAfAgQAgAggfAeIhSBTIk9E9ICACAIAtgtIHOnOICqiqQAUgTAYACQAWABASASQARARACAWQACAZgUATIgLALQgxAzhJBIIh8B6IpMJMIYXYWIG0m1QAQgPAQAAQAQAAAQAPII3I3IJ6p6MgqJgqIQgTgUACgYQACgXARgRQARgRAWgCQAZgCATAUMAyRAyRIHNnNQAfgfAfAgQAgAggfAeInMHNMAtkAtjMArSgrRQAfgfAfAgQAgAggfAeIgGAHQhcBjiSCPIjyDtMgjsAjrMA7BA7BQAUAUgCAYQgCAXgRARQgRARgWACQgZACgTgUMg7Cg7BIxORPMAqhAqiQAnAngEAxQgDAsgjAjQgiAigsADIgJABQgsAAgjgkgEBlggckMA/DA/CIACgDQBdhjCRiPIDyjtIJtptMgtkgtjIkOEOIFsFsQAfAfggAgQggAggfgfIlslsIlGFGIgGAGQggAggfgfIxAxAgEB2MgaiIHIHIIEsksInInIgEB74ggOIHIHIIEOkOInInIgEBI1g5PICBCBIBnhoIiAiAIhoBngEASUBKQQgVgVAUgVIX736Io4o7QgegfAfggQAgggAfAfII3I8IFhliQAVgUAVAVQAVAVgUAVIliFhIS0S+QAfAfggAfQggAggegfIy0y9I36X6QgKAKgLAAQgKAAgLgLgEgSDBKEIgEgFQg+g4hYhbIiUiXI6n6nIzyTzQAEAKgBAMQgCAWgRASQgRARgXACQgMABgKgEIpKJKQgUATgYgCQgXgCgRgRQgRgRgCgWQgCgZAUgTIAFgFQBDhJBrhpICyiuIDhjiIybycIkTETQgTATgZgCQgWgCgRgRQgSgRgBgWQgCgZATgTIAGgFQBFhMBuhrIC3i0IR+x+I+Z+YQgUgTACgZQACgWARgRQARgRAXgCQAYgCAUATIAEAFQBBA7BdBgICbCdIXcXcIChihInFnFQgUgUAVgWQAVgVAUAVIHFHFIEBkBQAUgVAWAWQAVAVgVAUInLHMIBVBVIVu1uQATgSAZACQALABAKAEQAKAEAIAJQARARACAWQACAZgUATIgFAGIgOAQQhCBFhjBhIgfAfIiYCVIv+P+IImImQATAUgCAYQgCAXgRARQgRARgWACQgZACgTgUIgFgEQhCg9hcheQhmhqg0g0IjpjpIyGSHISbSbITvzuIljlkQgUgTACgZQACgWARgRQASgRAWgCQAYgCAUATIAEAFQA+A4BYBbICUCXIA1A1IN4t4QARgRAVgBIAGAAQAWACARARQARASACAWQACAYgUAUIgFAFIgpAsQg4A7hNBLQh3Bzg7A7IoSITIfVfVQAUATgCAZQgCAWgRARQgSARgWACIgDABQgXAAgSgSgEjxjBGvQgsgEgjgiQgigjgEgsQgDgxAmgnMCMJiMIQAngnAxAEQAtADAiAjQAjAiADAsQAEAygnAmIuXOYIK4K4QAVAVgWAVQgVAVgUgUIq5q5Mh9HB9HQgjAjgtAAIgIAAgEgjxAPbQgWgCgRgRQgRgRgCgXQgCgYAUgUIAIgIQBuh1CuirIAzgyIAUgUIDZjWMBA+hA+QAUgUAYACQAXACARARQARARACAXQACAYgUAUIgIAIQhSBYh2B1IhUBTIhmBlIhLBJIhwBuMhA+BA+QgRASgWAAIgFAAg");
	this.shape.setTransform(1557.7,519.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3115.4,1039.2);


(lib.sky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4AABE2").s().p("EBaNBR0IgIgIQh1huipisQi8jAhehfI1n1nIzCTDQgfAfggggQggggAfgfITCzCMgpogppQgUgTACgZQACgWARgRQASgRAWgCQAYgCAUATIAIAJQB1BuCpCsIEaEeIY6Y5IO9u9IhnhmIiFiHMg0ng0mIvNPOIG1G3QAUATgCAZQgCAWgRARQgRARgXACQgYACgUgTInQnSQgKgFgIgIQgIgIgFgKIy9y9MgoqAopQmfGelLFMIqwKwQgnAngxgEQgsgEgjgiQgigjgEgsQgEgxAngnIAMgMQAdgeDwjvII4o3IMYsZMA1+g18I7373QgTgTACgZQABgWARgRQASgSAWgBQAYgCAUATIAMAMQA2A0BQBRICFCGII0I0QG0G1FeFdICaCZIbF7GQAngnAxAEQAtADAiAjQAjAiADAtQAEAxgnAnIgLALQg1A3hRBQIiHCGI2tWuIShSjIee+eQATgTAZACQAWABARARQARASACAWQACAYgUAUIgFAFQhIBOhwBuIi8C4I4kYkMA4+A49QASATgBAWIAAABIAAABIAAABQABAXgSASIvoPoMAmAAmBQAUATgCAZQgCAWgRARQgSARgWACIgEAAQgWAAgSgRgAp/0hIETESQA9hABThSIC8i4IKCqDIkUkTgArT12IHwnxIgCgCIruruInfHdQgOAPgPgHgEgH4gwzImcGcILvLvIACACIGcmeIrvrxIgCACgEgXkgiGQgGgPAOgPIHeneIgegeInxHwIApAqIAAAAgEgPdgrgIAfAfIGbmcIACgCIgegfg");
	this.shape.setTransform(587.6,525.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1175.2,1050.7);


(lib.orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE931A").s().p("EApHBPsQgsgDgjgjQgigigEgtQgEgxAngnMA0hg0gIp3p3IoiIhQgfAfggggQgggfAfgfII2o2QAEgHAGgGQAHgHAGgDILRrRQAfgfAgAgQAgAggfAeIq9K9IJ4J3MBmIhmHQAngnAxAEQAtADAiAjQAjAiADAtQAEAxgnAnMibpCbnQgjAkgtAAIgIgBgEjMyA++QgWgCgSgRQgRgSgBgWQgCgYATgUIAGgGQBVhbCFiDQCWiRBJhJMAx2gx3QAUgUAYACQAXACARARQARASACAWQACAYgUAUIgGAGQhVBbiFCDIjeDaMghgAhgICSCTIHHnHQAUgVAWAWQAVAVgVAUIkSETIC0CzIY445QAfgeAgAgQAgAfgfAfI45Y5IF+F+QAVAUgVAVQgWAWgUgVIl+l+IilClQgHAHgGAEQgcAWgcgcImQmQIvXPXQgSASgWAAIgEAAgEi4yAxSICzC0ICKiKIi0i0gECIiA5bQgWgCgRgRQgRgRgCgWQgCgZATgTIAIgHQBmhtCgieIELkHMA71g70QAUgTAYACQAWABASASQARARABAWQACAZgTATIgHAHQhnBtigCeQiyCuhYBYMg72A71QgRARgWAAIgFAAgEAnSAhiQgWgCgSgRQgRgRgBgWQgCgZATgTIP7v7QATgUAZACQAWACARARQALALAEAMIAMAJINVNWQATATgCAZQgBAWgRARQgSARgWACQgYACgUgTItItIIvMPMQgSARgWAAIgEAAgEgjIACgQgtgEgigiQgjgjgDgsQgEgwAngnIAIgHQBkhrCciZIEEkBMA6Pg6QQAngmAxADQAtAEAiAiQAjAiADAtQAEAxgnAmIgHAIQhlBqicCaQiuCqhWBWMg6PA6QQgkAjgrAAIgJAAgEhOLggYQghgfAfgfIVJ1JIKMqKIhqhqQgUgUACgYQACgXARgRQARgRAXgCQAYgCAUAUIMOMNQATAUgCAYQgBAXgRARQgSARgWACQgZACgTgUIplpkI/UfTQgPAQgPAAQgQAAgQgRg");
	this.shape.setTransform(1316.5,510.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2633.1,1020.2);


(lib.lightGreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8E12C").s().p("ECVYAUuMgkAgj/IsxMxITvTvQAVAUgVAVQgVAVgVgUIzwzvIl8F8IEbEcQAfAfggAgQggAfgfgeIkbkcIr+L+QgUAUgYgCQgXgDgRgRQgRgRgCgWQgCgZAUgTIL+r+Ir/r9IzeTcQgfAggfghQgggfAfggIT9z8QAQgQAQACQAQgCARAQIMdMdIF+l7IlsltQgVgUAWgVQAVgVAUAVIFsFrINdtdQATgUAZACQAWACARARIAIAJIACACMAkgAkfQATATgCAZQgBAWgRARQgSASgVACIgFAAQgWAAgRgSgEhgoAUUIupupIl2F2IChChQAUAUgDAYQgBAXgSARQgQARgXACQgYACgUgTIwCwBItDNCQgeAfghggQgfggAegfINDtCIxuxwQgTgTABgZQACgVARgSQARgRAXgCQAYgBAUATIRuRvIGLmLQAEgPANgNQANgMAPgFIH4n5QAUgTAUAGQAMACAMAMIMsMsIE0k0QATgUAZACQAWACARARQARASACAWQACAZgUATIkzE0ILpLoQAeAfgfAfQggAggfgfIrprnInEHDIOoOpQAUATgCAZQgCAWgRASQgSARgWABIgFAAQgVAAgSgRgEiCngB/IMLMMIF3l3IsNsLgEh7cgJKIMLMLIHGnEIsMsLg");
	this.shape.setTransform(966.2,134.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1932.3,268.7);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#45B676").s().p("EA1XBMuIgMgLQg2g1hRhRIiGiHMhTGhTHIgJgHIgIgJIxZxZIi5i6QgTgUACgYQABgWARgSQASgRAWgBQAYgCATATIAMAMQA3A1BQBRICGCHIGJGJQBLhPBphoQCSiNBHhIMAwbgwaQATgUAZACQAWACARARQARARACAWQACAZgUATIgGAGQhTBZiBCAQiSCOhHBHItzN0IucObIhfBfIyFSFIH4H4QA5g8BQhNICyivMAn3gn3QATgUAZACQAWACARARQARARACAWQACAZgUATIgFAFQhDBKhsBpQh3B0g7A6MgnKAnLMBW9BW+QATATgCAZQgBAWgRARQgSARgWACIgEAAQgWAAgSgSg");
	this.shape.setTransform(351.7,492.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,703.5,985.6);


(lib.darkBlue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#174A6A").s().p("ECHzBO1IgKgKQgygvhIhJIh4h5Mg7zg7zIxfReMAAAAkZQAAAcgSAQQgRAOgZAAQgYAAgRgOQgTgQAAgcIAAgIQgEhxACirQACi9AAhfIAA5hIxWRXIQdQdQAfAfggAgQgfAggfgfIwxwxQgQgEgNgNQgRgRgCgXQgCgYAUgUIF5l5IhxhwIiDiEItdtdI7DbFINVNWQAUAUgCAYQgCAWgRASQgSARgWABQgYACgUgTItVtWIusOsQgUATgYgCQgWgBgSgRQgRgSgBgWQgCgYATgUIOtusMhWxhWwIomImQgUAUgYgCQgXgCgRgRQgRgRgCgWQgCgZAUgTIAEgFQA8hCBihfICgidIDkjjMgpjgpjQgTgTACgZQABgWARgRQASgRAWgCQAYgCAUAUMApiApiIYe4dIiUiTQgTgUACgYQABgWARgSQASgRAWgCQAYgCAUAUICTCTIFVlUQATgUAZACQAWACARARQARARACAXQACAYgUAUIgEAEQg8BChiBfIgJAJIABABIAMALQA1A0BPBPIJNJNIDojnIzwzvQgTgTACgZQABgWASgRQARgRAWgCQAZgCATATITwTvIOdueQAUgTAYACQAXABARARQARASACAWQACAYgUATIzaTbMBJ8BJ9Id796ItLtLQgTgUACgYQABgXASgRQARgRAWgCQAZgCATAUIAKAKQAyAwBIBIIB3B5IJQJQMBIthItQATgUAZACQAWACARARQARARACAXQACAYgTAUMhItBItIXJXIIJQpRIuGuFQgfgeAgggQAgggAeAeIOHOGIEYkYI0M0LQgfgfAgggQAggfAeAeIUkUjIAIAHQAgAggfAfIlJFJQgEAJgJAKQgKAKgJAEIpgJfMA6MA6LQATAUgCAYQgBAXgSARQgRARgWACIgFAAQgWAAgRgSgEgbOAgdIVEVEIbE7EI1E1FgAXjacIRRRRIL5r5MAAAgiggEhc7ghOMBAYBAXIbF7FMgzlgzkIoyIzIDrDsQAUATgCAZQgCAWgRARQgRARgWACQgZACgTgUIjsjrIlHFGQgTAUgZgCQgVgCgQgPQgHgEgGgGIr/r/gEA2oAAYIgDEcIAAZIIQLwKIwIwGQABBNgBBfgEhQagtvILfLeIEckcIrerfgEhBigqZICYCXICTiTIiYiYgEg+kgtXICXCYIDOjOIiYiXgEhKpgzgIIdIcIGLmLIodocgEg6Cgx5ICYCYIBThTIiYiYgEhC3g7SIgSASIIcIcIBThTIoZoZIgCgCIhCBAg");
	this.shape.setTransform(879.3,506.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1758.7,1012.6);


(lib.TurqMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TurqMov1.gotoAndPlay(5);
		TurqMov2.gotoAndPlay(10);
		TurqMov3.gotoAndPlay(15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29));

	// Layer 1
	this.instance = new lib.Turquoise("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1217.7,561.6,1,1,0,0,0,1217.7,561.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1213.7,alpha:0.672},14).to({x:1217.7,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2435.5,1123.2);


(lib.springMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spring("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1557.7,519.5,1,1,0,0,0,1557.7,519.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1549.7,alpha:0.672},19).to({x:1561.7},70).to({x:1557.7,alpha:1},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3115.4,1039.2);


(lib.skyMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sky("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(587.6,525.3,1,1,0,0,0,587.6,525.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:581.6},17).to({x:583.6},17).to({x:587.6},55).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1175.2,1050.7);


(lib.orangeMon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		orangeMov2.gotoAndPlay(30);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59));

	// Layer 1
	this.instance = new lib.orange("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1316.5,510.1,1,1,0,0,0,1316.5,510.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},51).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2633.1,1020.2);


(lib.lightGreenMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		lightGreen1.gotoAndPlay(1);
		lightGreen2.gotoAndPlay(5);
		lightGreen3.gotoAndPlay(10);
		lightGreen4.gotoAndPlay(15);
		lightGreen5.gotoAndPlay(20);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// Layer 1
	this.instance = new lib.lightGreen("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(966.1,134.3,1,1,0,0,0,966.1,134.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.672},5).to({startPosition:0},13).to({alpha:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1932.3,268.7);


(lib.lightBlueMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(458.2,319.8);

	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(470.2,319.8);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(458.2,319.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},59).to({state:[{t:this.instance_2}]},149).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:470.2},59).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},59).to({_off:true,x:458.2},149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,916.5,639.7);


(lib.GreenMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		greenMov2.gotoAndPlay(6);
		greenMov3.gotoAndPlay(12);
		greenMov4.gotoAndPlay(18);
		greenMov5.gotoAndPlay(24);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48));

	// Layer 1
	this.instance = new lib.green("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(351.7,492.8,1,1,0,0,0,351.7,492.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.129},34).to({alpha:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,703.5,985.6);


(lib.darkBlueMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		darkBlueMov2.gotoAndPlay(18);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72));

	// Layer 1
	this.instance = new lib.darkBlue("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(879.3,506.3,1,1,0,0,0,879.3,506.3);
	this.instance.alpha = 0.672;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},17).to({alpha:0.809},18).to({alpha:0.551},18).to({alpha:0.672},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1758.7,1012.6);


// stage content:
(lib.crossLines3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer lG
	this.lightGreenMov5 = new lib.lightGreenMov();
	this.lightGreenMov5.parent = this;
	this.lightGreenMov5.setTransform(879,832.2,1,1,0,0,0,966.1,134.3);

	this.lightGreenMov4 = new lib.lightGreenMov();
	this.lightGreenMov4.parent = this;
	this.lightGreenMov4.setTransform(879,819.6,1,1,0,0,0,966.1,134.3);

	this.lightGreenMov3 = new lib.lightGreenMov();
	this.lightGreenMov3.parent = this;
	this.lightGreenMov3.setTransform(879,807.2,1,1,0,0,0,966.1,134.3);

	this.lightGreenMov2 = new lib.lightGreenMov();
	this.lightGreenMov2.parent = this;
	this.lightGreenMov2.setTransform(879,794.7,1,1,0,0,0,966.1,134.3);

	this.lightGreenMov1 = new lib.lightGreenMov();
	this.lightGreenMov1.parent = this;
	this.lightGreenMov1.setTransform(879,782.3,1,1,0,0,0,966.1,134.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lightGreenMov1},{t:this.lightGreenMov2},{t:this.lightGreenMov3},{t:this.lightGreenMov4},{t:this.lightGreenMov5}]}).wait(1));

	// Layer Or
	this.text = new cjs.Text("© Yebai Zhao", "32px 'Arial'");
	this.text.lineHeight = 38;
	this.text.lineWidth = 214;
	this.text.parent = this;
	this.text.setTransform(2730.7,724.5);

	this.orangeMov3 = new lib.orangeMon();
	this.orangeMov3.parent = this;
	this.orangeMov3.setTransform(1721.4,448.6,1,1,0,0,0,1316.5,510.1);

	this.orangeMov2 = new lib.orangeMon();
	this.orangeMov2.parent = this;
	this.orangeMov2.setTransform(1705.4,431.5,1,1,0,0,0,1316.5,510.1);

	this.orangeMov1 = new lib.orangeMon();
	this.orangeMov1.parent = this;
	this.orangeMov1.setTransform(1689.4,414.9,1,1,0,0,0,1316.5,510.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.orangeMov1},{t:this.orangeMov2},{t:this.orangeMov3},{t:this.text}]}).wait(1));

	// Layer Turq
	this.TurqMov2 = new lib.TurqMov();
	this.TurqMov2.parent = this;
	this.TurqMov2.setTransform(1889.4,505.5,1,1,0,0,0,1217.7,561.6);

	this.TurqMov3 = new lib.TurqMov();
	this.TurqMov3.parent = this;
	this.TurqMov3.setTransform(1920.9,505.5,1,1,0,0,0,1217.7,561.6);

	this.TurqMov1 = new lib.TurqMov();
	this.TurqMov1.parent = this;
	this.TurqMov1.setTransform(1857.9,505.5,1,1,0,0,0,1217.7,561.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.TurqMov1},{t:this.TurqMov3},{t:this.TurqMov2}]}).wait(1));

	// Layer spring
	this.instance = new lib.springMov();
	this.instance.parent = this;
	this.instance.setTransform(1539.9,406.3,1,1,0,0,0,1557.7,519.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer sky
	this.instance_1 = new lib.skyMov();
	this.instance_1.parent = this;
	this.instance_1.setTransform(497.8,369,1,1,0,0,0,587.6,525.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer lB
	this.lightBlueMov1 = new lib.lightBlueMov();
	this.lightBlueMov1.parent = this;
	this.lightBlueMov1.setTransform(952.6,581.9,1,1,0,0,0,458.2,319.8);

	this.timeline.addTween(cjs.Tween.get(this.lightBlueMov1).wait(1));

	// Layer dB
	this.darkBlueMov2 = new lib.darkBlueMov();
	this.darkBlueMov2.parent = this;
	this.darkBlueMov2.setTransform(1701.1,452.4,1,1,0,0,0,879.3,506.3);

	this.darkBlueMov1 = new lib.darkBlueMov();
	this.darkBlueMov1.parent = this;
	this.darkBlueMov1.setTransform(1699.1,441.1,1,1,0,0,0,879.3,506.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.darkBlueMov1},{t:this.darkBlueMov2}]}).wait(1));

	// Layer G
	this.greenMov5 = new lib.GreenMov();
	this.greenMov5.parent = this;
	this.greenMov5.setTransform(343.7,380.2,1,1,0,0,0,351.7,492.8);

	this.greenMov4 = new lib.GreenMov();
	this.greenMov4.parent = this;
	this.greenMov4.setTransform(343.8,366.2,1,1,0,0,0,351.7,492.8);

	this.greenMov3 = new lib.GreenMov();
	this.greenMov3.parent = this;
	this.greenMov3.setTransform(343.8,350.6,1,1,0,0,0,351.7,492.8);

	this.greenMov2 = new lib.GreenMov();
	this.greenMov2.parent = this;
	this.greenMov2.setTransform(343.8,335,1,1,0,0,0,351.7,492.8);

	this.greenMov1 = new lib.GreenMov();
	this.greenMov1.parent = this;
	this.greenMov1.setTransform(343.8,319.4,1,1,0,0,0,351.7,492.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.greenMov1},{t:this.greenMov2},{t:this.greenMov3},{t:this.greenMov4},{t:this.greenMov5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1410.2,226.6,3228.5,1240.6);
// library properties:
lib.properties = {
	id: 'C755E69007FE1E469DC0883A964E34E8',
	width: 3000,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C755E69007FE1E469DC0883A964E34E8'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;