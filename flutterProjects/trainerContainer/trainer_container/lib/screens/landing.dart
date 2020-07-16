import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:trainer_container/domain/user.dart';
import 'package:trainer_container/screens/auth.dart';
import 'package:trainer_container/screens/home.dart';

class LandingPage extends StatelessWidget {
  const LandingPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final User user  = Provider.of<User>(context);
    final bool isLoggedIn = user != null;

    return isLoggedIn ? HomePage() : AuthorizationPage();
  }
}