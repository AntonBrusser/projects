import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:trainer_container/screens/landing.dart';
import 'package:trainer_container/services/auth.dart';

import 'domain/user.dart';



void main() => runApp(TrainerContainer());

class TrainerContainer extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) {
    return StreamProvider<User>.value(
      value: AuthService().currentUser,
          child: MaterialApp(
        title: 'Trainer Container',
        theme: ThemeData(
          primaryColor: Color.fromRGBO(50,65,85,1),
          textTheme: TextTheme(title: TextStyle(color: Colors.white))
        ),
        home: LandingPage(),
      ),
    );
  }
}

