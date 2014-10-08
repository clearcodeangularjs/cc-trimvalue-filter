/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-value-filter.

    cc-value-filter is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-value-filter is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-value-filter.  If not, see <http://www.gnu.org/licenses/>.

*/
'use strict';

describe('Filter: trimValue', function() {

    beforeEach(module('cc.trimvalue.filter'));

    var trimValue;

    beforeEach(inject(function($filter) {
        trimValue = $filter('trimValue');
    }));

    it('should convert number larger then 100 to 99+ by default', function(){
        expect(trimValue(100)).toBe('99+');
        expect(trimValue(1000)).toBe('99+');
        expect(trimValue(10056)).toBe('99+');
        expect(trimValue(100345)).toBe('99+');
        expect(trimValue(103450)).toBe('99+');
    });

    it('shold convert non number value into 0', function(){
        expect(trimValue('wat')).toBe('0');
    });

    it('shold convert NaN into 0', function(){
        expect(trimValue(NaN)).toBe('0');
    });

    it('should convert number properly when have second param', function(){
        expect(trimValue(100, 10)).toBe('9+')
        expect(trimValue(100, 58)).toBe('57+')
    });

});
