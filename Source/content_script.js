walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;
	var strSplit = v.split(' ');
	var cool = "cool ";
	var coolUpper = "Cool "

	for (var i = 0; i < strSplit.length; i++) {
		if (strSplit[i] === 'cool') {
			strSplit[i] =  cool.repeat((Math.floor(Math.random() * 4) + 2));
		} else if (strSplit[i] === 'Cool') {
			strSplit[i] =  coolUpper.repeat((Math.floor(Math.random() * 4) + 2));
		}
	}
	v = strSplit.join(" ");

	textNode.nodeValue = v;
}
