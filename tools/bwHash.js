angular.module('bwHash', [])
.directive('vbox', function() {
  return {
    link: function(scope, element, attrs) {
      attrs.$observe('vbox', function(value) {
        element.attr('viewBox', value);
      })
    }
  };
})
.directive('bwHash', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},

    controller: function($scope, $element) {
      $scope.src = "";
      $scope.dots = [];
      $scope.viewBox = "0 0 0 0";

      var encStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

      vector_fromString = function( v_str ) {
        v_new = new Array();
        for (k = 0; k < v_str.length; k++) {
          s_chr = v_str[k];
          s_int = encStr.indexOf( s_chr );
          s_bin = s_int.toString(2);
          s_bin = String("000000" + s_bin ).slice(-6);
          for(i = 0; i < 6; i++ ) {
            value = (s_bin[i] == 1) ? 1:0 ;
            v_new.push( value );
          }
        };
        return v_new;
      }

      matrix_fromString = function( m_str ) {
        //busco la cantidad de bloques por linea
        m_blks = encStr.indexOf( m_str[0] );

        M = new Array();

        for( var k = 1; k < m_str.length; k+= m_blks) {
          v_slice = m_str.slice(k, k+m_blks);
          v_bin = vector_fromString( v_slice );
          M.push( v_bin );
        }
        return M;
      }

      $scope.decode_bw_hash = function( m_str ){

        var matrix = matrix_fromString( m_str );

        var rows = matrix.length;
        var cols = matrix[0].length;
        $scope.viewBox = "0 0 " + cols + " " + rows;

        $scope.dots = [];
        for(y = 0; y < rows; y++) {
            for(x = 0; x < cols; x++) {
                var dot = {
                  x: x,
                  y: y,
                  color: matrix[y][x] && 'white' || 'black'
                };
                $scope.dots.push( dot );
            }
        }
      }

    },

    template:
      '<svg width="100%" height="100%" vbox="{{viewBox}}" >' +
        '<rect ng-repeat="dot in dots"' +
                'ng-attr-x="{{ dot.x }}"' +
                'ng-attr-y="{{ dot.y }}"' +
                'fill="{{ dot.color }}"' +
                'width="1" height="1" />' +
      '</svg>',

    link: function (scope, element, attributes) {
      scope.src = attributes.src;
      scope.decode_bw_hash(scope.src); 
    },
    replace: true
  };
});