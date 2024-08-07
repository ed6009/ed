toc.dat                                                                                             0000600 0004000 0002000 00000034363 14631002110 0014434 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP       *                |            edtech    16.2    16.2 (Homebrew) *    P           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         Q           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         R           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         S           1262    16688    edtech    DATABASE     h   CREATE DATABASE edtech WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE edtech;
                postgres    false         �            1259    16827    course    TABLE     �   CREATE TABLE public.course (
    course_id character varying(10) NOT NULL,
    course_name character varying(100),
    course_description text,
    teacher_id character varying(10),
    syllabus character varying(255)
);
    DROP TABLE public.course;
       public         heap    postgres    false         �            1259    16777    employee    TABLE     %  CREATE TABLE public.employee (
    emp_id character varying(10) NOT NULL,
    emp_name character varying(30) NOT NULL,
    password character varying(255) NOT NULL,
    qualification character varying(100),
    status character varying(25) DEFAULT 'active'::character varying,
    doj date
);
    DROP TABLE public.employee;
       public         heap    postgres    false         �            1259    16874    employeeprofile    TABLE     4  CREATE TABLE public.employeeprofile (
    profile_id character varying(25) NOT NULL,
    emp_id character varying(25),
    email character varying(100) NOT NULL,
    phone_number character varying(15) NOT NULL,
    gender character varying(10) NOT NULL,
    profile_photo character varying(255),
    attach_document character varying(255),
    address character varying(255),
    city character varying(50),
    state character varying(50),
    salary numeric(10,2),
    nationality character varying(50),
    marital_status character varying(20),
    dob date
);
 #   DROP TABLE public.employeeprofile;
       public         heap    postgres    false         �            1259    16839 
   enrollment    TABLE     �   CREATE TABLE public.enrollment (
    enrollment_id character varying(10) NOT NULL,
    student_id character varying(10),
    course_id character varying(10),
    enrollment_date date
);
    DROP TABLE public.enrollment;
       public         heap    postgres    false         �            1259    16772    role    TABLE     w   CREATE TABLE public.role (
    role_id character varying(10) NOT NULL,
    role_name character varying(30) NOT NULL
);
    DROP TABLE public.role;
       public         heap    postgres    false         �            1259    16782 
   roleassign    TABLE     z   CREATE TABLE public.roleassign (
    role_id character varying(10) NOT NULL,
    emp_id character varying(10) NOT NULL
);
    DROP TABLE public.roleassign;
       public         heap    postgres    false         �            1259    16797    student    TABLE       CREATE TABLE public.student (
    student_id character varying(10) NOT NULL,
    student_name character varying(100),
    password character varying(255) NOT NULL,
    status character varying(25) DEFAULT 'active'::character varying,
    education character varying(25)
);
    DROP TABLE public.student;
       public         heap    postgres    false         �            1259    16807    studentprofile    TABLE     �  CREATE TABLE public.studentprofile (
    profile_id character varying(10) NOT NULL,
    student_id character varying(10),
    gender character varying(10),
    email character varying(100),
    student_documentation character varying(255),
    address character varying(255),
    city character varying(100),
    state character varying(100),
    nationality character varying(50),
    profile_photo character varying(255),
    doj date,
    dob date,
    phone_number character varying(15)
);
 "   DROP TABLE public.studentprofile;
       public         heap    postgres    false         �            1259    16802    teacher    TABLE     A  CREATE TABLE public.teacher (
    teacher_id character varying(10) NOT NULL,
    teacher_name character varying(100),
    password character varying(255) NOT NULL,
    qualification character varying(100),
    status character varying(25) DEFAULT 'active'::character varying,
    specialization character varying(100)
);
    DROP TABLE public.teacher;
       public         heap    postgres    false         �            1259    16817    teacherprofile    TABLE     
  CREATE TABLE public.teacherprofile (
    profile_id character varying(10) NOT NULL,
    teacher_id character varying(10),
    gender character varying(10),
    email character varying(100),
    teacher_documentation character varying(255),
    address character varying(255),
    city character varying(100),
    state character varying(100),
    marital_status character varying(20),
    nationality character varying(50),
    salary numeric(10,2),
    profile_photo character varying(255),
    doj date,
    dob date
);
 "   DROP TABLE public.teacherprofile;
       public         heap    postgres    false         K          0    16827    course 
   TABLE DATA           b   COPY public.course (course_id, course_name, course_description, teacher_id, syllabus) FROM stdin;
    public          postgres    false    222       3659.dat E          0    16777    employee 
   TABLE DATA           Z   COPY public.employee (emp_id, emp_name, password, qualification, status, doj) FROM stdin;
    public          postgres    false    216       3653.dat M          0    16874    employeeprofile 
   TABLE DATA           �   COPY public.employeeprofile (profile_id, emp_id, email, phone_number, gender, profile_photo, attach_document, address, city, state, salary, nationality, marital_status, dob) FROM stdin;
    public          postgres    false    224       3661.dat L          0    16839 
   enrollment 
   TABLE DATA           [   COPY public.enrollment (enrollment_id, student_id, course_id, enrollment_date) FROM stdin;
    public          postgres    false    223       3660.dat D          0    16772    role 
   TABLE DATA           2   COPY public.role (role_id, role_name) FROM stdin;
    public          postgres    false    215       3652.dat F          0    16782 
   roleassign 
   TABLE DATA           5   COPY public.roleassign (role_id, emp_id) FROM stdin;
    public          postgres    false    217       3654.dat G          0    16797    student 
   TABLE DATA           X   COPY public.student (student_id, student_name, password, status, education) FROM stdin;
    public          postgres    false    218       3655.dat I          0    16807    studentprofile 
   TABLE DATA           �   COPY public.studentprofile (profile_id, student_id, gender, email, student_documentation, address, city, state, nationality, profile_photo, doj, dob, phone_number) FROM stdin;
    public          postgres    false    220       3657.dat H          0    16802    teacher 
   TABLE DATA           l   COPY public.teacher (teacher_id, teacher_name, password, qualification, status, specialization) FROM stdin;
    public          postgres    false    219       3656.dat J          0    16817    teacherprofile 
   TABLE DATA           �   COPY public.teacherprofile (profile_id, teacher_id, gender, email, teacher_documentation, address, city, state, marital_status, nationality, salary, profile_photo, doj, dob) FROM stdin;
    public          postgres    false    221       3658.dat �           2606    16833    course course_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_pkey PRIMARY KEY (course_id);
 <   ALTER TABLE ONLY public.course DROP CONSTRAINT course_pkey;
       public            postgres    false    222         �           2606    16781    employee employee_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (emp_id);
 @   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_pkey;
       public            postgres    false    216         �           2606    16880 $   employeeprofile employeeprofile_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.employeeprofile
    ADD CONSTRAINT employeeprofile_pkey PRIMARY KEY (profile_id);
 N   ALTER TABLE ONLY public.employeeprofile DROP CONSTRAINT employeeprofile_pkey;
       public            postgres    false    224         �           2606    16843    enrollment enrollment_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.enrollment
    ADD CONSTRAINT enrollment_pkey PRIMARY KEY (enrollment_id);
 D   ALTER TABLE ONLY public.enrollment DROP CONSTRAINT enrollment_pkey;
       public            postgres    false    223         �           2606    16776    role role_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (role_id);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public            postgres    false    215         �           2606    16786    roleassign roleassign_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.roleassign
    ADD CONSTRAINT roleassign_pkey PRIMARY KEY (role_id, emp_id);
 D   ALTER TABLE ONLY public.roleassign DROP CONSTRAINT roleassign_pkey;
       public            postgres    false    217    217         �           2606    16801    student student_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (student_id);
 >   ALTER TABLE ONLY public.student DROP CONSTRAINT student_pkey;
       public            postgres    false    218         �           2606    16811 "   studentprofile studentprofile_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.studentprofile
    ADD CONSTRAINT studentprofile_pkey PRIMARY KEY (profile_id);
 L   ALTER TABLE ONLY public.studentprofile DROP CONSTRAINT studentprofile_pkey;
       public            postgres    false    220         �           2606    16806    teacher teacher_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_pkey PRIMARY KEY (teacher_id);
 >   ALTER TABLE ONLY public.teacher DROP CONSTRAINT teacher_pkey;
       public            postgres    false    219         �           2606    16821 "   teacherprofile teacherprofile_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.teacherprofile
    ADD CONSTRAINT teacherprofile_pkey PRIMARY KEY (profile_id);
 L   ALTER TABLE ONLY public.teacherprofile DROP CONSTRAINT teacherprofile_pkey;
       public            postgres    false    221         �           2606    16834    course course_teacher_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.teacher(teacher_id);
 G   ALTER TABLE ONLY public.course DROP CONSTRAINT course_teacher_id_fkey;
       public          postgres    false    3490    222    219         �           2606    16881 +   employeeprofile employeeprofile_emp_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employeeprofile
    ADD CONSTRAINT employeeprofile_emp_id_fkey FOREIGN KEY (emp_id) REFERENCES public.employee(emp_id);
 U   ALTER TABLE ONLY public.employeeprofile DROP CONSTRAINT employeeprofile_emp_id_fkey;
       public          postgres    false    3484    216    224         �           2606    16849 $   enrollment enrollment_course_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.enrollment
    ADD CONSTRAINT enrollment_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.course(course_id);
 N   ALTER TABLE ONLY public.enrollment DROP CONSTRAINT enrollment_course_id_fkey;
       public          postgres    false    3496    222    223         �           2606    16844 %   enrollment enrollment_student_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.enrollment
    ADD CONSTRAINT enrollment_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.student(student_id);
 O   ALTER TABLE ONLY public.enrollment DROP CONSTRAINT enrollment_student_id_fkey;
       public          postgres    false    223    218    3488         �           2606    16792 !   roleassign roleassign_emp_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.roleassign
    ADD CONSTRAINT roleassign_emp_id_fkey FOREIGN KEY (emp_id) REFERENCES public.employee(emp_id);
 K   ALTER TABLE ONLY public.roleassign DROP CONSTRAINT roleassign_emp_id_fkey;
       public          postgres    false    217    216    3484         �           2606    16787 "   roleassign roleassign_role_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.roleassign
    ADD CONSTRAINT roleassign_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.role(role_id);
 L   ALTER TABLE ONLY public.roleassign DROP CONSTRAINT roleassign_role_id_fkey;
       public          postgres    false    215    3482    217         �           2606    16812 -   studentprofile studentprofile_student_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.studentprofile
    ADD CONSTRAINT studentprofile_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.student(student_id);
 W   ALTER TABLE ONLY public.studentprofile DROP CONSTRAINT studentprofile_student_id_fkey;
       public          postgres    false    220    3488    218         �           2606    16822 -   teacherprofile teacherprofile_teacher_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.teacherprofile
    ADD CONSTRAINT teacherprofile_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.teacher(teacher_id);
 W   ALTER TABLE ONLY public.teacherprofile DROP CONSTRAINT teacherprofile_teacher_id_fkey;
       public          postgres    false    221    219    3490                                                                                                                                                                                                                                                                                     3659.dat                                                                                            0000600 0004000 0002000 00000000005 14631002110 0014237 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3653.dat                                                                                            0000600 0004000 0002000 00000000067 14631002110 0014241 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        E2	Sanidhya	69696969	MBBS in CS	active	2024-05-11
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                         3661.dat                                                                                            0000600 0004000 0002000 00000000005 14631002110 0014230 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3660.dat                                                                                            0000600 0004000 0002000 00000000005 14631002110 0014227 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3652.dat                                                                                            0000600 0004000 0002000 00000000052 14631002110 0014232 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        R1	Admin
R2	Manager
R3	HR
R4	Teacher
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      3654.dat                                                                                            0000600 0004000 0002000 00000000005 14631002110 0014232 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3655.dat                                                                                            0000600 0004000 0002000 00000000151 14631002110 0014235 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        S1	Mohit	12345678	active	B.Tech
S2	Sandhya	12345678	active	B.Tech
S3	Nandani	12345678	active	B.Tech
\.


                                                                                                                                                                                                                                                                                                                                                                                                                       3657.dat                                                                                            0000600 0004000 0002000 00000001160 14631002110 0014240 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        P1	S1	Male	mohittumram1@gmail.com	\N	Sausar	Sausar	M.P.	Indian	http://localhost:8080../../Assets/Images/undefined	2024-01-01	2024-01-11	+917024802662
P2	S1	Male	mohittumram1@gmail.com	\N	Sausar	Sausar	M.P.	Indian	http://localhost:8080../../Assets/Images/undefined	2024-01-01	2024-01-11	+917024802662
P3	S1	Male	mohittumram1@gmail.com	\N	Sausar	Sausar	M.P.	Indian	http://localhost:8080../../Assets/Images/undefined	2024-01-01	2024-01-11	+917024802662
P4	S1	Male	mohittumram1@gmail.com	\N	Sausar	Sausar	M.P.	Indian	http://localhost:8080../../Assets/Images/image-1716536843364.bat.jpeg	2024-01-01	2024-01-11	+917024802662
\.


                                                                                                                                                                                                                                                                                                                                                                                                                3656.dat                                                                                            0000600 0004000 0002000 00000000213 14631002110 0014235 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        str	Johny Sins	stringstring	Space Science	active	\N
T2	Mama	12345678	Backchodi	active	\N
T1	Mohit Tumram	12345678	Backchodi	active	\N
\.


                                                                                                                                                                                                                                                                                                                                                                                     3658.dat                                                                                            0000600 0004000 0002000 00000003077 14631002110 0014252 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        str	str	male	string@gmail.com	string	string	string	string	string	string	0.00	string	2024-05-11	2024-05-11
P1	\N	Male	mohittumram1@gmail.com	None	Sausar	Sausar	M.P.	single	Indian	\N	http://localhost:8080../../Assets/Images/image-1716538647473.bat.jpeg	2024-01-01	2024-01-11
P5	\N	Male	mohittumram1@gmail.com	None	Sausar	Sausar	M.P.	single	Indian	\N	http://localhost:8080../../Assets/Images/image-1716883361158.bat.jpeg	2024-01-01	2024-01-11
P8	\N	Male	mohittumram1@gmail.com	None	Sausar	Sausar	M.P.	single	Indian	\N	http://localhost:8080/Assets/Images/image-1716883598671.bat.jpeg	2024-01-01	2024-01-11
P9	\N	Male	mohittumram1@gmail.com	None	Sausar	Sausar	M.P.	single	Indian	\N	http://localhost:8080/Assets/Images/image-NaN.bat.jpeg	2024-01-01	2024-01-11
P10	\N	Male	mohittumram1@gmail.com	None	Sausar	Sausar	M.P.	single	Indian	\N	http://localhost:8080/Assets/Images/image-Tue May 28 2024 15:14:32 GMT+0530 (India Standard Time).bat.jpeg	2024-01-01	2024-01-11
P11	\N	Male	mohittumram1@gmail.com	None	Sausar	Sausar	M.P.	single	Indian	\N	http://localhost:8080/Assets/Imagesimage-1716890157865.bat.jpeg	2024-01-01	2024-01-11
P12	\N	Male	mohittumram1@gmail.com	None	Sausar	Sausar	M.P.	single	Indian	\N	http://localhost:8080/Assets/Imagesimage-1716890536645.bat.jpeg	2024-01-01	2024-01-11
P13	\N	Male	mohittumram1@gmail.com	None	Sausar	Sausar	M.P.	single	Indian	\N	http://localhost:8080/imagesimage-1716890560366.bat.jpeg	2024-01-01	2024-01-11
P14	\N	Male	mohittumram1@gmail.com	None	Sausar	Sausar	M.P.	single	Indian	\N	http://localhost:8080/images/image-1716890583023.bat.jpeg	2024-01-01	2024-01-11
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                 restore.sql                                                                                         0000600 0004000 0002000 00000031145 14631002110 0015354 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE edtech;
--
-- Name: edtech; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE edtech WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';


ALTER DATABASE edtech OWNER TO postgres;

\connect edtech

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: course; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course (
    course_id character varying(10) NOT NULL,
    course_name character varying(100),
    course_description text,
    teacher_id character varying(10),
    syllabus character varying(255)
);


ALTER TABLE public.course OWNER TO postgres;

--
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employee (
    emp_id character varying(10) NOT NULL,
    emp_name character varying(30) NOT NULL,
    password character varying(255) NOT NULL,
    qualification character varying(100),
    status character varying(25) DEFAULT 'active'::character varying,
    doj date
);


ALTER TABLE public.employee OWNER TO postgres;

--
-- Name: employeeprofile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employeeprofile (
    profile_id character varying(25) NOT NULL,
    emp_id character varying(25),
    email character varying(100) NOT NULL,
    phone_number character varying(15) NOT NULL,
    gender character varying(10) NOT NULL,
    profile_photo character varying(255),
    attach_document character varying(255),
    address character varying(255),
    city character varying(50),
    state character varying(50),
    salary numeric(10,2),
    nationality character varying(50),
    marital_status character varying(20),
    dob date
);


ALTER TABLE public.employeeprofile OWNER TO postgres;

--
-- Name: enrollment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.enrollment (
    enrollment_id character varying(10) NOT NULL,
    student_id character varying(10),
    course_id character varying(10),
    enrollment_date date
);


ALTER TABLE public.enrollment OWNER TO postgres;

--
-- Name: role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role (
    role_id character varying(10) NOT NULL,
    role_name character varying(30) NOT NULL
);


ALTER TABLE public.role OWNER TO postgres;

--
-- Name: roleassign; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roleassign (
    role_id character varying(10) NOT NULL,
    emp_id character varying(10) NOT NULL
);


ALTER TABLE public.roleassign OWNER TO postgres;

--
-- Name: student; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student (
    student_id character varying(10) NOT NULL,
    student_name character varying(100),
    password character varying(255) NOT NULL,
    status character varying(25) DEFAULT 'active'::character varying,
    education character varying(25)
);


ALTER TABLE public.student OWNER TO postgres;

--
-- Name: studentprofile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.studentprofile (
    profile_id character varying(10) NOT NULL,
    student_id character varying(10),
    gender character varying(10),
    email character varying(100),
    student_documentation character varying(255),
    address character varying(255),
    city character varying(100),
    state character varying(100),
    nationality character varying(50),
    profile_photo character varying(255),
    doj date,
    dob date,
    phone_number character varying(15)
);


ALTER TABLE public.studentprofile OWNER TO postgres;

--
-- Name: teacher; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teacher (
    teacher_id character varying(10) NOT NULL,
    teacher_name character varying(100),
    password character varying(255) NOT NULL,
    qualification character varying(100),
    status character varying(25) DEFAULT 'active'::character varying,
    specialization character varying(100)
);


ALTER TABLE public.teacher OWNER TO postgres;

--
-- Name: teacherprofile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teacherprofile (
    profile_id character varying(10) NOT NULL,
    teacher_id character varying(10),
    gender character varying(10),
    email character varying(100),
    teacher_documentation character varying(255),
    address character varying(255),
    city character varying(100),
    state character varying(100),
    marital_status character varying(20),
    nationality character varying(50),
    salary numeric(10,2),
    profile_photo character varying(255),
    doj date,
    dob date
);


ALTER TABLE public.teacherprofile OWNER TO postgres;

--
-- Data for Name: course; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course (course_id, course_name, course_description, teacher_id, syllabus) FROM stdin;
\.
COPY public.course (course_id, course_name, course_description, teacher_id, syllabus) FROM '$$PATH$$/3659.dat';

--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee (emp_id, emp_name, password, qualification, status, doj) FROM stdin;
\.
COPY public.employee (emp_id, emp_name, password, qualification, status, doj) FROM '$$PATH$$/3653.dat';

--
-- Data for Name: employeeprofile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employeeprofile (profile_id, emp_id, email, phone_number, gender, profile_photo, attach_document, address, city, state, salary, nationality, marital_status, dob) FROM stdin;
\.
COPY public.employeeprofile (profile_id, emp_id, email, phone_number, gender, profile_photo, attach_document, address, city, state, salary, nationality, marital_status, dob) FROM '$$PATH$$/3661.dat';

--
-- Data for Name: enrollment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.enrollment (enrollment_id, student_id, course_id, enrollment_date) FROM stdin;
\.
COPY public.enrollment (enrollment_id, student_id, course_id, enrollment_date) FROM '$$PATH$$/3660.dat';

--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.role (role_id, role_name) FROM stdin;
\.
COPY public.role (role_id, role_name) FROM '$$PATH$$/3652.dat';

--
-- Data for Name: roleassign; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roleassign (role_id, emp_id) FROM stdin;
\.
COPY public.roleassign (role_id, emp_id) FROM '$$PATH$$/3654.dat';

--
-- Data for Name: student; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student (student_id, student_name, password, status, education) FROM stdin;
\.
COPY public.student (student_id, student_name, password, status, education) FROM '$$PATH$$/3655.dat';

--
-- Data for Name: studentprofile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.studentprofile (profile_id, student_id, gender, email, student_documentation, address, city, state, nationality, profile_photo, doj, dob, phone_number) FROM stdin;
\.
COPY public.studentprofile (profile_id, student_id, gender, email, student_documentation, address, city, state, nationality, profile_photo, doj, dob, phone_number) FROM '$$PATH$$/3657.dat';

--
-- Data for Name: teacher; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teacher (teacher_id, teacher_name, password, qualification, status, specialization) FROM stdin;
\.
COPY public.teacher (teacher_id, teacher_name, password, qualification, status, specialization) FROM '$$PATH$$/3656.dat';

--
-- Data for Name: teacherprofile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teacherprofile (profile_id, teacher_id, gender, email, teacher_documentation, address, city, state, marital_status, nationality, salary, profile_photo, doj, dob) FROM stdin;
\.
COPY public.teacherprofile (profile_id, teacher_id, gender, email, teacher_documentation, address, city, state, marital_status, nationality, salary, profile_photo, doj, dob) FROM '$$PATH$$/3658.dat';

--
-- Name: course course_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_pkey PRIMARY KEY (course_id);


--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (emp_id);


--
-- Name: employeeprofile employeeprofile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employeeprofile
    ADD CONSTRAINT employeeprofile_pkey PRIMARY KEY (profile_id);


--
-- Name: enrollment enrollment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollment
    ADD CONSTRAINT enrollment_pkey PRIMARY KEY (enrollment_id);


--
-- Name: role role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (role_id);


--
-- Name: roleassign roleassign_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roleassign
    ADD CONSTRAINT roleassign_pkey PRIMARY KEY (role_id, emp_id);


--
-- Name: student student_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (student_id);


--
-- Name: studentprofile studentprofile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.studentprofile
    ADD CONSTRAINT studentprofile_pkey PRIMARY KEY (profile_id);


--
-- Name: teacher teacher_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teacher_pkey PRIMARY KEY (teacher_id);


--
-- Name: teacherprofile teacherprofile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacherprofile
    ADD CONSTRAINT teacherprofile_pkey PRIMARY KEY (profile_id);


--
-- Name: course course_teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.teacher(teacher_id);


--
-- Name: employeeprofile employeeprofile_emp_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employeeprofile
    ADD CONSTRAINT employeeprofile_emp_id_fkey FOREIGN KEY (emp_id) REFERENCES public.employee(emp_id);


--
-- Name: enrollment enrollment_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollment
    ADD CONSTRAINT enrollment_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.course(course_id);


--
-- Name: enrollment enrollment_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollment
    ADD CONSTRAINT enrollment_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.student(student_id);


--
-- Name: roleassign roleassign_emp_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roleassign
    ADD CONSTRAINT roleassign_emp_id_fkey FOREIGN KEY (emp_id) REFERENCES public.employee(emp_id);


--
-- Name: roleassign roleassign_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roleassign
    ADD CONSTRAINT roleassign_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.role(role_id);


--
-- Name: studentprofile studentprofile_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.studentprofile
    ADD CONSTRAINT studentprofile_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.student(student_id);


--
-- Name: teacherprofile teacherprofile_teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacherprofile
    ADD CONSTRAINT teacherprofile_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.teacher(teacher_id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           