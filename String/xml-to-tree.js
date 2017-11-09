// Convert an XML string to an n-ary tree

const XmlElementType = {
  ELEMENT_UNKNOWN: 1,
  ELEMENT_OPENING_TAG: 2,
  ELEMENT_CLOSING_TAG: 3,
  ELEMENT_TEXT: 4
}

const XmlElement = function() {
  this.element_type = XmlElement.ELEMENT_UNKNOWN
  this.node_name = ""
}

const XmlTokenizer = function(xml_str) {
  this.xml = xml_str
  this.current_index = 0

  this.get_next_element = element => {
    let i = this.xml.slice(this.current_index).search("<")

    if (i === -1) {
      return false
    }
    i += this.current_index

    let temp = this.xml.slice(this.current_index, i)
    temp = temp.trim()

    if (temp.length !== 0) {
      element.node_name = temp
      element.element_type = XmlElementType.ELEMENT_TEXT

      this.current_index = i
      return true
    }

    let j = this.xml.slice(i).search(">")
    j += i
    if (this.xml[i + 1] === "/") {
      element.node_name = this.xml.slice(i + 2, j)
      element.element_type = XmlElementType.ELEMENT_CLOSING_TAG
    } else {
      element.node_name = this.xml.slice(i + 1, j)
      element.element_type = XmlElementType.ELEMENT_OPENING_TAG
    }
    this.current_index = j +1
    return true
  }
}

const Node_xml = function(name) {
  this.node_name = name
  this.children = []
}

const createXmlTree = function(xml) {

  let tok = new XmlTokenizer(xml)
  let element = new XmlElement()

  if (!tok.get_next_element(element)) {
    return null
  }

  console.log(element.node_name)

  let st = []
  let root = new Node_xml(element.node_name)
  st.push(root)

  while (tok.get_next_element(element)) {
    console.log(element.node_name)
    let n = null
    if (element.element_type === XmlElementType.ELEMENT_OPENING_TAG
      || element.element_type === XmlElementType.ELEMENT_TEXT) {
        n = new Node_xml(element.node_name)
        st[st.length -1].children.push(n)
    }

    if (element.element_type === XmlElementType.ELEMENT_OPENING_TAG) {
      st.push(n)
    } else if (element.element_type === XmlElementType.ELEMENT_CLOSING_TAG) {
      st.pop()
    }
  }

  return root
}
