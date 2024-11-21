import Container from '../Atoms/Container/Container';
import Typography from '../Atoms/Typography/Typography';
import Layout from '../components/Layout/Layout';
import styles from './styles.module.scss';
const page = () => {
  return (
    <Layout>
      <Container className={styles.privacy}>
        <Typography variant='h1Title' component='h1'>
          Data Protection Agreement
        </Typography>
        <Typography component='p' variant='body1'>
          This Data Protection Agreement (hereinafter referred to as
          “Agreement”) forms part of the agreement between SCARPEL LIMITED and
          Customer covering Customer’s use of the Services (as defined below). 
        </Typography>
        <Typography component='h5' variant='h5Title'>
          SECTION 1 - SCOPE OF THE AGREEMENT
        </Typography>
        <Typography component='p' variant='body1'>
          1.1 The Parties understand that Customer acts as the controller or as
          the processor acting on behalf of Customer’s clients, who act as
          controllers. Customer appoints Provider as the Processor, or as the
          sub-processor of Customer and/or Customer’s clients, for the
          processing of the Personal Data for the purpose as specified herein. 
        </Typography>
        <Typography component='p' variant='body1'>
          1.2 The Processor warrants that it will only process the Personal Data
          in such manner as – and to the extent that – this is necessary for the
          provision of the services under the Service Agreement, except as
          required in order to follow instructions of the Controller, or to
          comply with legal obligations to which the Processor is subject, in
          which case the Processor is obliged to notify the Controller of such
          legal obligation. 
        </Typography>
        <Typography component='h5' variant='h5Title'>
          SECTION 2 - THE CONTROLLER AND THE PROCESSOR
        </Typography>
        <Typography component='p' variant='body1'>
          2.1 The Parties understand that Customer acts as the controller or as
          the processor acting on behalf of Customer’s clients, who act as
          controllers. Customer appoints Provider as the Processor, or as the
          sub-processor of Customer and/or Customer’s clients, for the
          processing of the Personal Data for the purpose as specified herein. 
        </Typography>
        <Typography component='p' variant='body1'>
          2.2 The Processor warrants that it will only process the Personal Data
          in such manner as – and to the extent that – this is necessary for the
          provision of the services under the Service Agreement, except as
          required in order to follow instructions of the Controller, or to
          comply with legal obligations to which the Processor is subject, in
          which case the Processor is obliged to notify the Controller of such
          legal obligation.  
        </Typography>
        <Typography component='p' variant='body1'>
          2.3 The Data Processor warrants that it will only process the Personal
          Data in accordance with applicable Data Protection Laws and
          instructions of Data Controller, stipulated in the Service Agreement,
          this Agreement or elsewhere if recorded by the Parties in writing.
        </Typography>
        <Typography component='h5' variant='h5Title'>
          SECTION 3 - Confidentiality
        </Typography>
        <Typography component='p' variant='body1'>
          3.1 Without prejudice to any existing contractual arrangements between
          the Parties, the Processor warrants that it shall treat all Personal
          Data as strictly confidential. The Processor shall ensure that all
          persons or parties (employees, agents and other persons) which are
          involved in the processing of the Personal Data are familiar with Data
          Protection Laws relevant to their scope of work, have signed and are
          bound by an adequate confidentiality agreement and/or are under any
          other binding obligation of confidentiality.  
        </Typography>
        <Typography component='p' variant='body1'>
          3.2 The Processor is not violating this obligation if and when such
          disclosure is mandatory under the applicable laws or if and when the
          data subject has published its Personal Data in public. 
        </Typography>
        <Typography component='h5' variant='h5Title'>
          SECTION 4 - SECURITY MEASURES
        </Typography>
        <Typography component='p' variant='body1'>
          4.1 Without prejudice to any other security standards agreed upon by
          the Parties, the Processor shall take appropriate technical and
          organisational measures to ensure the security of the processing of
          the Personal Data. These measures shall include inter alia: 
        </Typography>
        <Typography component='p' variant='body1'>
          4.1.1 The pseudonymization and encryption of the Personal Data;
        </Typography>
        <Typography component='p' variant='body1'>
          4.1.2 The ability to ensure the ongoing confidentiality, integrity,
          availability and resilience of processing systems and services;
        </Typography>
        <Typography component='p' variant='body1'>
          4.1.3 The ability to restore the availability and access to the
          Personal Data in a timely manner in the event of a physical or
          technical incident;
        </Typography>
        <Typography component='p' variant='body1'>
          4.1.4 A process for regularly testing, assessing, and evaluating the
          effectiveness of technical and organisational measures for ensuring
          the security of the processing.
        </Typography>
        <Typography component='p' variant='body1'>
          4.2 The expanded list of security measures is set forth in Appendix 1
          hereto. 
        </Typography>
        <Typography component='h5' variant='h5Title'>
          SECTION 5 - IMPROVEMENTS TO SECURITY MEASURES
        </Typography>
        <Typography component='p' variant='body1'>
          5.1 The Parties acknowledge that security requirements are constantly
          changing and that guaranteeing effective security, ongoing
          confidentiality, integrity, availability, and resilience of processing
          systems and services, requires frequent evaluation and regular
          improvements of outdated security measures. The Processor will
          therefore evaluate its measures as implemented in accordance with
          article 4 on an ongoing basis and will tighten, supplement, and
          improve such measures in order to maintain compliance with the
          relevant security requirements.
        </Typography>
        <Typography component='h5' variant='h5Title'>
          SECTION 6 - AUDIT AND INFORMATION
        </Typography>
        <Typography component='p' variant='body1'>
          6.1 The Data Controller has the right to perform an audit of the Data
          Processor to the extent if the Data Controller has concerns whether
          Data Processor complies with the provisions of this Agreement. The
          audit can be performed in case if all of the following requirements
          are met: 
        </Typography>
        {/* <Typography variant='body1'>
          Information that you directly submit to us through our Services may
          include:
        </Typography> */}
        <ul className={styles.list}>
          <li>
            <Typography component='p' variant='body1'>
              The audit is performed not more than once per twelve (12) months; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              The audit is performed by an independent third party (auditor);
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              The prior two (2) months notification by the Controller is given,
              defining the purpose and place of audit, and the detailed list of
              information that will be audited. 
            </Typography>
          </li>
        </ul>
        <Typography component='p' variant='body1'>
          6.2 The Processor shall, at the Controllers first request, provide all
          information deemed reasonably necessary by the Controller to comply
          with, or prove that it complies with, its legal requirements,
          including in any event requirements set forth in the applicable Data
          Protection Laws as far as such access is not breaching the
          confidentiality agreements that the Data Processor has with other
          partners and/or applicable laws.
        </Typography>
        <Typography component='h5' variant='h5Title'>
          SECTION 7 - INTERNATIONAL DATA TRANSFER
        </Typography>
        <Typography component='p' variant='body1'>
          7.1 The Parties agree that the Personal Data will not be transferred
          outside the European Economic Area (the “EEA”), unless specifically
          agreed otherwise pursuant to this Agreement or the Services Agreement
          (eg, is an integral part of the provisioning of the Services).
        </Typography>
        <Typography component='p' variant='body1'>
          7.2 Where the provisioning of the Services involves a transfer of the
          Personal Data to a processing party outside the EEA, additional
          requirements are to be met in addition to ensure an adequate level of
          data protection. 
        </Typography>
        <Typography component='p' variant='body1'>
          7.3 The Controller hereby grants its consent to the Processor to enter
          into any agreement or take any measures to establish and ensure an
          adequate level of data protection for the transfer of the Personal
          Data to a sub-processing party outside the EEA.
        </Typography>
        <Typography component='p' variant='body1'>
          7.4 The Parties agree that if and when the processor (sub-processor)
          engaged by the Processor fails to fulfil its data protection
          obligations, the Processor shall remain fully liable to the Controller
          for the performance of that other processor’s obligations. The
          Processor shall impose the same data protection obligations as set out
          herein on the engaged processor (sub-processor) by way of a contract
          or other legal act according to applicable law. 
        </Typography>
        <Typography component='h5' variant='h5Title'>
          SECTION 8 - INFORMATION OBLIGATIONS AND INCIDENT MANAGEMENT
        </Typography>
        <Typography component='p' variant='body1'>
          8.1 The Processor shall at all times without undue delay after
          becoming aware of the incident, but not later than within twenty-four
          (24) hours, notify the Controller of any incident with regard to the
          processing of the Personal Data, shall at all times cooperate with the
          Controller and shall follow the Controller’s instructions in order to
          enable the Controller to perform a thorough investigation, to
          formulate a correct response and to take suitable further steps in
          respect of such incident. Specifically, the Processor warrants that it
          provides the Controller with all information necessary to fulfil its
          legal obligations, such as the obligation to notify incidents as
          stipulated in the applicable Data Protection Laws. 
        </Typography>
        <Typography component='p' variant='body1'>
          8.2 The term “incident” used in clause 8.1 shall mean in any case:
        </Typography>
        <Typography component='p' variant='body1'>
          8.2.1 Any communication of a data subject with regard to its Personal
          Data;
        </Typography>
        <Typography component='p' variant='body1'>
          8.2.2 An investigation into or seizure of the Personal Data by
          government officials, or any indication that this is about to take
          place; 
        </Typography>
        <Typography component='p' variant='body1'>
          8.2.3 Any breach of the security and/or confidentiality or articles 3
          and 4 of this Agreement leading to the loss or any form of unlawful
          processing, including destruction, alteration, unauthorized discloser
          of, or access to, the Personal Data, or any indication of such breach
          having taken place or being about to take place. 
        </Typography>
        <Typography component='p' variant='body1'>
          8.3 In case of an incident as described in clauses 8.2.1., 8.2.2 and
          8.2.3 the Processor notifies the Controller within twenty-four (24)
          hours after becoming aware of the incident. Such notification
          includes: (i) the nature of the incident; (ii) the date and time upon
          which the incident took place and was discovered; (iii) the (amount
          of) data subjects affected by the incident; (iv) which categories of
          Personal Data were involved with the incident; and (v) whether and, if
          so, which security measures – such as encryption – were taken to
          render the Personal Data incomprehensible or inaccessible to anyone
          without the authorization to access these data. 
        </Typography>
        <Typography component='h5' variant='h5Title'>
          SECTION 9 - DURATION AND TERMINATION 
        </Typography>
        <Typography component='p' variant='body1'>
          9.1 This Agreement shall come into effect on effective date of the
          Service Agreement or as soon as the processing of the Personal Data on
          behalf of the Controller starts and shall end automatically either:
          when the service agreement is terminated or expires; or at such time
          the Processor has deleted or returned all Personal Data in accordance
          with article 9, whichever happens first.
        </Typography>{' '}
        <Typography component='p' variant='body1'>
          9.2 Termination or expiration of this Agreement shall not discharge
          the Processor from its obligations meant to survive the termination or
          expiration of the Agreement. 
        </Typography>
        <Typography component='h5' variant='h5Title'>
          SECTION 10 - MISCELLANEOUS
        </Typography>
        <Typography component='p' variant='body1'>
          10.1 The Parties agree that the terms as set out herein supersede and
          replace any existing privacy and data protection terms contained in
          the Service Agreement pertaining to the processing of the Personal
          Data.  
        </Typography>
        <Typography component='p' variant='body1'>
          10.2 This Agreement shall be governed by and construed in accordance
          with the laws of England and Wales. The Parties hereto submit to the
          exclusive jurisdiction of the International Chamber of Commerce (ICC)
          arbitration in London, England for determining any dispute concerning
          this Agreement. 
        </Typography>
        <Typography component='p' variant='body1'>
          10.3 By entering into the Service Agreement, the Customer is deemed to
          have signed this Data Processing Agreement, including their Annexes,
          as of the effective date of the Service Agreement. 
        </Typography>
        <Typography component='p' variant='body1'>
          We will not discriminate against you for exercising any of these
          rights. We may need to collect information from you to verify your
          identity, such as your email address or account information, before
          providing a substantive response to the request. In accordance with
          applicable laws, You may designate an authorized agent to make
          requests on your behalf to exercise your rights. Before accepting such
          a request from an agent, we will require that the agent provide proof
          you have authorized them to act on your behalf, and we may need you to
          verify your identity directly with us. We will respond to your request
          in a timely manner as required under applicable law.
        </Typography>
        <Typography component='h5' variant='h5Title'>
          APPENDIX 1 - SECURITY MEASURES
        </Typography>
        <Typography component='p' variant='body1'>
          1.1 Physical access control. Technical and organizational measures to
          prevent unauthorized persons from gaining access to the data
          processing systems available in premises and facilities (including
          databases, application servers and related hardware), where Personal
          Data are processed, include:  
        </Typography>
        <ul className={styles.list}>
          <li>
            <Typography component='p' variant='body1'>
              Establishing security areas, restriction of access paths;  
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Establishing access authorizations for employees and third
              parties; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Access control system (eg ID reader, magnetic card, chip card);  
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Key management, cardkeys procedures; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Door locking (electric door openers etc.); 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Security staff, janitors; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Surveillance facilities, video/CCTV monitor, alarm system;  
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Securing decentralized data processing equipment and personal
              computers.  
            </Typography>
          </li>
        </ul>
        <Typography component='p' variant='body1'>
          1.2 Virtual access control. Technical and organizational measures to
          prevent data processing systems from being used by unauthorized
          persons include:
        </Typography>
        <ul className={styles.list}>
          <li>
            <Typography component='p' variant='body1'>
              User identification and authentication procedures; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              ID/password security procedures (special characters, minimum
              length, change of password); 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Automatic blocking (e.g., password or timeout); 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Monitoring of break-in-attempts and automatic turn-off of the user
              ID upon several erroneous passwords attempts; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Creation of one master record per user, user master data
              procedures, per data processing environment; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Encryption of archived data media. 
            </Typography>
          </li>
        </ul>
        <Typography component='p' variant='body1'>
          1.3 Data access control. Technical and organizational measures to
          ensure that persons entitled to use a data processing system gain
          access only to such Personal Data in accordance with their access
          rights, and that Personal Data cannot be read, copied, modified, or
          deleted without authorization, include:  
        </Typography>
        <ul className={styles.list}>
          <li>
            <Typography component='p' variant='body1'>
              Internal policies and procedures; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Control authorization schemes; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Differentiated access rights (profiles, roles, transactions and
              objects);  
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Monitoring and logging of accesses; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Disciplinary action against employees who access Personal Data
              without authorization; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Reports of access;
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Change procedure; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Deletion procedure;
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Reports of access;
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Encryption.
            </Typography>
          </li>
        </ul>
        <Typography component='p' variant='body1'>
          1.4 Disclosure control. Technical and organizational measures to
          ensure that Personal Data cannot be read, copied, modified, or deleted
          without authorization during electronic transmission, transport or
          storage on storage media (manual or electronic), and that it can be
          verified to which companies or other legal entities Personal Data are
          disclosed, include:
        </Typography>
        <ul className={styles.list}>
          <li>
            <Typography component='p' variant='body1'>
              Encryption/tunnelling;  
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Logging; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Transport security. 
            </Typography>
          </li>
        </ul>
        <Typography component='p' variant='body1'>
          1.5 Entry control. Technical and organizational measures to monitor
          whether data have been entered, changed, or removed (deleted), and by
          whom, from data processing systems, include:  
        </Typography>
        <ul className={styles.list}>
          <li>
            <Typography component='p' variant='body1'>
              Logging and reporting systems; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Audit trails and documentation.
            </Typography>
          </li>
        </ul>
        <Typography component='p' variant='body1'>
          1.6 Control of instructions. Technical and organizational measures to
          ensure that Personal Data are processed solely in accordance with the
          Instructions of the Controller include:  
        </Typography>
        <ul className={styles.list}>
          <li>
            <Typography component='p' variant='body1'>
              Unambiguous wording of the contract; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Formal commissioning (request form); 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Criteria for selecting the Processor. 
            </Typography>
          </li>
        </ul>
        <Typography component='p' variant='body1'>
          1.7 Availability control. Technical and organizational measures to
          ensure that Personal Data are protected against accidental destruction
          or loss (physical/logical) include: 
        </Typography>
        <ul className={styles.list}>
          <li>
            <Typography component='p' variant='body1'>
              Backup procedures; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Mirroring of hard disks (e.g., RAID technology); {' '}
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Uninterruptible power supply (UPS); {' '}
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Remote storage; {' '}
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Anti-virus/firewall systems; {' '}
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Disaster recovery plan. {' '}
            </Typography>
          </li>
        </ul>
        <Typography component='p' variant='body1'>
          1.8 Separation control. Technical and organizational measures to
          ensure that Personal Data collected for different purposes can be
          processed separately include: 
        </Typography>
        <ul className={styles.list}>
          <li>
            <Typography component='p' variant='body1'>
              Separation of databases; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              “Internal Customer” concept / limitation of use; 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Segregation of functions (production/testing); 
            </Typography>
          </li>
          <li>
            <Typography component='p' variant='body1'>
              Procedures for storage, amendment, deletion, transmission of data
              for different purposes. 
            </Typography>
          </li>
        </ul>
        <Typography component='h5' variant='h5Title'>
          APPENDIX 2 - DETAILS OF PROCESSING OF CUSTOMER PERSONAL DATA
        </Typography>
        <Typography component='p' variant='body1'>
          This APPENDIX 2 contains certain details of the processing of Personal
          Data as required by Article 5 of the GDPR.
        </Typography>
        <Typography component='p' variant='body1'>
          A. Data Subjects. The Personal Data concerns the following categories
          of data subjects: 
        </Typography>
        <ul>
          <li>
            <Typography component='p' variant='body1'>
              Customer’s clients.
            </Typography>
          </li>
        </ul>
        <Typography component='p' variant='body1'>
          B. Categories of data. The Personal Data concerns the following
          categories of data:  
        </Typography>
        <ul>
          <li>
            <Typography component='p' variant='body1'>
              Personal details of Customer’s clients: name, phone number.{' '}
            </Typography>
          </li>
        </ul>
        <Typography component='p' variant='body1'>
          B. Categories of data. The Personal Data concerns the following
          categories of data:  
        </Typography>
        <ul>
          <li>
            <Typography component='p' variant='body1'>
              Personal details of Customer’s clients: name, phone number.{' '}
            </Typography>
          </li>
        </ul>
        <Typography component='p' variant='body1'>
          C. Purpose of processing: Provider collects types of information,
          specified in article B hereof for various purposes to provide and
          improve Provider’s service.
        </Typography>
        <Typography component='p' variant='body1'>
          D. Processing activities: Collection.
        </Typography>{' '}
        <Typography component='p' variant='body1'>
          E. Duration: The Personal Data will be processed by the Partner for
          the duration of the Agreement or until this DPA is terminated,
          whichever is sooner.
        </Typography>
      </Container>
    </Layout>
  );
};

export default page;
