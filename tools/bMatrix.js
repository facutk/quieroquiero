var encStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

function gen_matrix( rows, cols ) {
	var a, b;
	matrix = new Array();
	for( var a = 0; a < cols; a++ ) {
		matrix.push( new Array() );
		for( var b = 0; b < rows; b++ ) {
			val = (Math.random()<0.5)?0:1;
			matrix[a].push(val);
		}
	}
	return matrix;
}

function random_matrix() {
	rows = Math.floor( Math.random() * 5 + 1)*6;//horizontal
	cols = Math.floor( Math.random() * 5 + 1)*6;//vertical
	return gen_matrix( rows, cols );
}

function vector_toString( V ) {
	var v_str = "";
	v_len = V.length;
	for( k = 0; k < v_len; k+= 6) {
		v_slice = V.slice(k, k+6);
		v_bin = v_slice.join("");
		v_int = parseInt( v_bin, 2 );
		v_chr = encStr.charAt( v_int );
		v_str += v_chr;
		//console.log( k + "-" + (k+6) );
		//console.log( v_slice );
		//console.log( v_bin );
		//console.log( v_int );
		//console.log( v_chr );
		//console.log("");
	}
	return v_str;
}

function vector_fromString( v_str ) {
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
		//console.log( s_chr + ": " + s_int + ": " + s_bin );
	};
	return v_new;
}

function matrix_toString( M ) {
	m_str = "";
	//El primer caracter, es para ver la cantidad de bloques de 6
	m_blks = encStr.charAt( Math.floor( M[0].length / 6 ) );
	m_str += m_blks;
	for (var i = 0; i < M.length; i++) {
		m_str += vector_toString( M[i] );
	};
	return m_str;
}

function matrix_fromString( m_str ) {
	//busco la cantidad de bloques por linea
	m_blks = encStr.indexOf( m_str[0] );

	M = new Array();
	//console.log( m_blks );

	for( var k = 1; k < m_str.length; k+= m_blks) {
		v_slice = m_str.slice(k, k+m_blks);
		//console.log( v_slice );
		v_bin = vector_fromString( v_slice );
		//console.log( v_bin );
		M.push( vector_fromString( v_slice ) );
	}
	return M;
}

function all_good() {

	A = random_matrix();

	m_str = matrix_toString( A );

	M = matrix_fromString( m_str );
	console.log( A );
	console.log( m_str );

	return ( JSON.stringify( A ) == JSON.stringify( M ) );
}

console.log( all_good() );

