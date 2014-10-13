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

angular.module('cc.trimvalue.filter', []).filter('trimValue', function() {
    return function(value, max_value) {
        if(isNaN(value)){
            return '0';
        }
        value = angular.isNumber(value) ? value : 0;
        max_value = angular.isNumber(max_value) ? max_value : 100;
        if (value >= max_value){
            return max_value - 1 + '+';
        } else {
            return value.toString();
        }
    };
});
