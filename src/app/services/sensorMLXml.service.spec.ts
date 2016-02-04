const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!--This document contains an exemplary description of a component type: In this case a type of a pressure detector-->
<!--This SensorML 2.0 example is based on the sensor registry work of the ESONET Network of Excellence and was further advanced in WP4 of the NeXOS project.
ESONET was cofunded by the European Commission in the Sixth Framework Programme (FP6) under contract no. 036851.
NeXOS has received funding from the European Union’s Seventh Programme (FP7) for research, technological development and demonstration under grant agreement no. 614102.
-->
<sml:PhysicalComponent gml:id="pressureDetector_Type_XY123" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:sml="http://www.opengis.net/sensorml/2.0" xmlns:swe="http://www.opengis.net/swe/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/sensorml/2.0 http://schemas.opengis.net/sensorML/2.0/sensorML.xsd http://www.opengis.net/swe/2.0 http://schemas.opengis.net/sweCommon/2.0/swe.xsd">
   <!--Textual description of the component type-->
   <gml:description>Metadata for the pressure detector type XY123</gml:description>
   <!--Identifiers of the component type-->
   <sml:identification>
      <sml:IdentifierList>
         <!--The name of the component manufacturer-->
         <sml:identifier>
            <sml:Term definition="http://www.nexosproject.eu/dictionary/definitions.html#manufacturerName">
               <sml:label>Manufacturer Name</sml:label>
               <sml:value>Pressure Detector Company</sml:value>
            </sml:Term>
         </sml:identifier>
         <!--The model number of the component-->
         <sml:identifier>
            <sml:Term definition="http://www.nexosproject.eu/dictionary/definitions.html#modelNumber">
               <sml:label>Model Number</sml:label>
               <sml:value>XY123</sml:value>
            </sml:Term>
         </sml:identifier>
         <!--The model id of the component-->
         <sml:identifier>
            <sml:Term definition="http://www.nexosproject.eu/dictionary/definitions.html#modelID">
               <sml:label>Model ID</sml:label>
               <sml:value>123456B</sml:value>
            </sml:Term>
         </sml:identifier>
      </sml:IdentifierList>
   </sml:identification>
   <!--Capabilities of the component type-->
   <sml:capabilities name="pressureDetectorCapabilities">
      <sml:CapabilityList>
         <!--The sensivitiy of detector-->
         <sml:capability name="sensitivity">
            <swe:Quantity definition="http://vocab.ndg.nerc.ac.uk/term/P211/27/MS9724">
               <swe:label>Sensitivity (dB[1.V/uPa])</swe:label>
               <swe:uom code="dB[1.V/uPa]"/>
               <swe:value>-173</swe:value>
            </swe:Quantity>
         </sml:capability>
         <!--The usable frequency range of the sensor-->
         <sml:capability name="usableFrequencyRange">
            <swe:QuantityRange definition="http://www.nexosproject.eu/dictionary/definitions.html#usableFrequencyRange">
               <swe:label>Usable Frequency Range (Hz)</swe:label>
               <swe:uom code="Hz"/>
               <swe:value>5 85000</swe:value>
            </swe:QuantityRange>
         </sml:capability>
         <!--The linear frequency range of the sensor-->
         <sml:capability name="linearFrequencyRange">
            <swe:QuantityRange definition="http://www.nexosproject.eu/dictionary/definitions.html#linearFrequencyRange">
               <swe:label>Linear  Frequency Range (Hz)</swe:label>
               <swe:uom code="Hz"/>
               <swe:value>15 45000</swe:value>
            </swe:QuantityRange>
         </sml:capability>
         <!--The horizontal omnidirectionality limit of the sensor-->
         <sml:capability name="horizontalOmnidirectionalityLimit">
            <swe:Quantity definition="http://www.nexosproject.eu/dictionary/definitions.html#horizontalOmnidirectionalityLimit">
               <swe:label>Horizontal Omnidirectionality Limit (Hz)</swe:label>
               <swe:uom code="Hz"/>
               <swe:value>40000</swe:value>
            </swe:Quantity>
         </sml:capability>
         <!--The vertical omnidirectionality limit of the sensor-->
         <sml:capability name="verticalOmnidirectionalityLimit">
            <swe:Quantity definition="http://www.nexosproject.eu/dictionary/definitions.html#verticalOmnidirectionalityLimit">
               <swe:label>Vertical Omnidirectionality Limit (Hz)</swe:label>
               <swe:uom code="Hz"/>
               <swe:value>0</swe:value>
            </swe:Quantity>
         </sml:capability>
         <!--The maximum operating depth of the sensor-->
         <sml:capability name="maximumOperatingDepth">
            <swe:Quantity definition="http://vocab.ndg.nerc.ac.uk/term/P211/27/MS11304">
               <swe:label>Maximum Operating Depth (m)</swe:label>
               <swe:uom code="m"/>
               <swe:value>2500</swe:value>
            </swe:Quantity>
         </sml:capability>
      </sml:CapabilityList>
   </sml:capabilities>
   <!--Contact details for this component type; this should only contain the manufacturer of this component type-->
   <sml:contacts>
      <sml:ContactList>
         <!--Contact details for the manufacturer-->
         <sml:contact xlink:title="manufacturer">
            <gmd:CI_ResponsibleParty>
               <!--Name of the company which has manufactured the component-->
               <gmd:organisationName>
                  <gco:CharacterString>52°North GmbH</gco:CharacterString>
               </gmd:organisationName>
               <!--Contact details of the company which has manufactured the component-->
               <gmd:contactInfo>
                  <gmd:CI_Contact>
                     <gmd:phone>
                        <gmd:CI_Telephone>
                           <!--Phone number of the company which has manufactured the component-->
                           <gmd:voice>
                              <gco:CharacterString>+49-(0)-251-396371-31</gco:CharacterString>
                           </gmd:voice>
                           <gmd:facsimile>
                              <!--Fax number of the company which has manufactured the component-->
                              <gco:CharacterString>+49-(0)-251-396371-11</gco:CharacterString>
                           </gmd:facsimile>
                        </gmd:CI_Telephone>
                     </gmd:phone>
                     <!--Address of the company which has manufactured the component-->
                     <gmd:address>
                        <gmd:CI_Address>
                           <!--Street and house numer where the company which has manufactured the component is located-->
                           <gmd:deliveryPoint>
                              <gco:CharacterString>Martin-Luther-King-Weg 24</gco:CharacterString>
                           </gmd:deliveryPoint>
                           <!--City where the company which has manufactured the component is located-->
                           <gmd:city>
                              <gco:CharacterString>Münster</gco:CharacterString>
                           </gmd:city>
                           <!--Admnistrative area where the company which has manufactured the component is located (e.g. the federal state within a country)-->
                           <gmd:administrativeArea>
                              <gco:CharacterString>North Rhine-Westphalia</gco:CharacterString>
                           </gmd:administrativeArea>
                           <!--Postal code of the area where the company which has manufactured the component is located)-->
                           <gmd:postalCode>
                              <gco:CharacterString>48155</gco:CharacterString>
                           </gmd:postalCode>
                           <!--Country where the company which has manufactured the component is located-->
                           <gmd:country>
                              <gco:CharacterString>Germany</gco:CharacterString>
                           </gmd:country>
                           <!--Email contact of the company which has manufactured the component-->
                           <gmd:electronicMailAddress>
                              <gco:CharacterString>jirka@52north.org</gco:CharacterString>
                           </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                     </gmd:address>
                  </gmd:CI_Contact>
               </gmd:contactInfo>
               <!--For the manufacturer the role should be originator-->
               <gmd:role>
                  <gmd:CI_RoleCode codeList="http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode/" codeListValue="originator">Manufacturer</gmd:CI_RoleCode>
               </gmd:role>
            </gmd:CI_ResponsibleParty>
         </sml:contact>
      </sml:ContactList>
   </sml:contacts>
   <!--Inputs which are observed by the sensor-->
   <sml:inputs>
      <sml:InputList>
         <sml:input name="pressure" xlink:href="http://www.nexosproject.eu/dictionary/definitions.html#pressure"/>
      </sml:InputList>
   </sml:inputs>
   <!--Outputs of the sensors-->
   <sml:outputs>
      <sml:OutputList>
         <sml:output name="voltage">
            <swe:Quantity definition="http://www.nexosproject.eu/dictionary/definitions.html#voltage">
               <swe:uom code="V"/>
            </swe:Quantity>
         </sml:output>
      </sml:OutputList>
   </sml:outputs>
</sml:PhysicalComponent>`;


import { SensorMLXmlService } from './sensorMLXml.service';
import { PhysicalSystem } from '../model/sensorML';
describe('SensorMLXmlService', () => {

  let service = new SensorMLXmlService();

  it('should parse the document', () => {
    expect(service.deserialize(xml)).not.toBeNull();
  });

  it('should serialize the document', () => {
    expect(service.serialize(new PhysicalSystem())).not.toBeNull();
  });

});


